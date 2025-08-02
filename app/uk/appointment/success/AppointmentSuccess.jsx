"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AppointmentSuccess() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [updateToPaid, setUpdateToPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const appointmentUpdateToPaid = async () => {
      if (!sessionId) return;

      try {
        const updateResponse = await fetch('/api/appointment', {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id: sessionId }),
        });

        if (updateResponse.ok) {
    const resData=await updateResponse.json();
    console.log("resData: ",resData);
    const storedSessions = JSON.parse(localStorage.getItem("appointmentSessions") || "[]");
    if (!storedSessions.includes(resData.session_id)) {
      storedSessions.push(resData.session_id);
      localStorage.setItem("appointmentSessions", JSON.stringify(storedSessions));
    }

          setUpdateToPaid(true);
        } else {
          const err = await updateResponse.json();
          setError(err.message || "Failed to update payment status.");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
        console.error("Error updating payment status:", err);
      } finally {
        setLoading(false);
      }
    };

    appointmentUpdateToPaid();
  }, [sessionId]);

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Payment Successful</h1>
      <p>Session ID: <strong>{sessionId}</strong></p>
      {loading && <p>Updating payment status...</p>}
      {!loading && updateToPaid && (
        <p style={{ color: "green" }}>Appointment payment status updated successfully.</p>
      )}
      {!loading && error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
}
 