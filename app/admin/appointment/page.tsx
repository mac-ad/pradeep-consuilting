'use client';
import { AppointmentData } from "@/app/types/appointment";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<AppointmentData[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/appointment");
        const data = await res.json();
        console.log("appointment: ", data);
        setAppointments(data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/appointment?id=${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appointment_status: newStatus }),
      });

      if (res.ok) {
        setAppointments((prev) =>
          prev.map((appt) =>
            appt.id === id ? { ...appt, appointment_status: newStatus } : appt
          )
        );
      } else {
        const errData=await res.json();
        console.log("Error message",errData.message);
        throw new Error(errData.message || 'Failed to appointment event.');
      }
    } catch (err) {
        console.log(err);
        if(err instanceof Error){
          toast.error(err.message);
        }else{
          toast.error("something went wrong");
        }
    }
  };

  const handleSearchText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      const trimmed = searchText.trim();
      if (trimmed === "") {
        setSearchResult([]);
        return;
      }
      try {
        const response = await fetch(`/api/appointment?search=${trimmed}`);
        if (!response.ok) {
          const errData=await response.json();
          throw new Error(errData.message);
        }
         const data = await response.json();
          console.log("search result appointment: ", data);
          setSearchResult(data);
      } catch (error) {
        console.log("error while searching: ",error)
         if(error instanceof Error){
          toast.error(error.message);
        }else{
          toast.error("something went wrong");
        }

      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const displayAppointments = searchResult.length > 0 ? searchResult : appointments;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">All Appointments</h1>

      <input
        placeholder="Search Appointment"
        className="w-full md:w-80 px-4 py-2 mb-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        name="search"
        value={searchText}
        onChange={handleSearchText}
      />

      {loading ? (
        <p>Loading appointments...</p>
      ) : displayAppointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Time</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Payment Status</th>
                <th className="px-4 py-2 border">Appointment Status</th>
              </tr>
            </thead>
            <tbody>
              {displayAppointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{appt.name}</td>
                  <td className="px-4 py-2 border">{appt.date}</td>
                  <td className="px-4 py-2 border"> {(() => {
    const [hoursStr, minutesStr] = appt.time.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = minutesStr || '00'; 
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert 0 to 12
    return `${hours}:${minutes} ${period}`;
  })()}</td>
                  <td className="px-4 py-2 border">{appt.email} </td>
                  <td className="px-4 py-2 border capitalize">
                    {appt.paymentStatus}
                  </td>
                  <td className="px-4 py-2 border">
                    <select
                      className="border rounded p-1"
                      value={appt.appointment_status}
                      onChange={(e) => updateStatus(appt.id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
