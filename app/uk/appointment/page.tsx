"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // adjust path as per your setup
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { loadStripe } from "@stripe/stripe-js";
import { AppointmentFormSchema } from "@/schemas/appointment";
import { z } from "zod";
import { toast } from "sonner";
import { AppointmentData } from "@/app/types/appointment";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type AppointmentFormValues = z.infer<typeof AppointmentFormSchema>;





const Appointment = () => {
  const[loadingAppointments,setLoadingAppointments]=useState(false);
  const[bookedDates,setBookedDates]=useState<Date[]>([]);
  const[userAppointments,setUserAppointments]=useState<AppointmentData[]>([]);
    console.log("userAppointments: ",userAppointments);
  useEffect(() => {
  const fetchClientBookings = async () => {
    try {
      const storedSessions = JSON.parse(localStorage.getItem("appointmentSessions") || "[]");
      if (!storedSessions || storedSessions.length === 0) return;
      
      setLoadingAppointments(true);

      const bookings = await Promise.all(
        storedSessions.map(async (id: string) => {
          const res = await fetch(`/api/appointment?id=${id}`);
          if (res.ok) return await res.json();
          return null;
        })
      );

      const validBookings = bookings.filter(Boolean);
      setUserAppointments(validBookings);
    } catch (error) {
      console.log("Error fetching the booking dates: ", error);
    } finally {
      setLoadingAppointments(false);
    }
  };

  fetchClientBookings();
}, []);

   useEffect(()=>{
     const fetchBookedDates=async()=>{ 
        try{
          const dateResponse=await fetch('/api/appointment?booking_dates=true');
          if(!dateResponse.ok){
            throw new Error("Faild to fetch booked dates..");
          }
          const data=await dateResponse.json();
          const parsedDates=data.map((dateStr:string)=>new Date(dateStr));
          setBookedDates(parsedDates);
            console.log("booked dates response: ",data)
        }catch(error){
           console.log("error fetching booked dates: ",error);
        }
     }
     fetchBookedDates();
  },[])
  const form = useForm<AppointmentFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      street: "",
      branch: "Uk",
      date: "",
      time: "13:00",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
   
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if(!res.ok){
        const checkOutData=await res.json();
        throw new Error(checkOutData.message);
      }
      const resData = await res.json();
      const appointmentResponse=await fetch("/api/appointment",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(resData)

      });

      if(!appointmentResponse.ok){
        const appData=await appointmentResponse.json();
        console.log("response data: ",appData);
        throw new Error(appData.message)
      }
      const stripe = await stripePromise;
      stripe?.redirectToCheckout({ sessionId: resData.session_id });
    } catch (error) {
      if(error instanceof Error){
        toast.error(error.message);
      }else{
        toast.error("Something went wrong");
      }
    }
  };




  return (
    <div className="w-full py-5 lg:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row justify-between items-start">
        {/* Left content omitted for brevity... */}

        <div className="lg:w-1/2 flex justify-end w-full">
          <div className="w-full max-w-80 px-3 md:px-8 lg:max-w-lg mx-auto border-2 border-primary rounded-xl shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 sm:p-6 md:p-10 lg:p-14 space-y-4">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* City */}
                <FormField
                  control={form.control}
                  name="city"
                  rules={{ required: "City is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="City Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Street */}
                <FormField
                  control={form.control}
                  name="street"
                  rules={{ required: "Street is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Street address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Branch (Select) */}
                <FormField
                  control={form.control}
                  name="branch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Uk">UK</SelectItem>
                            {/* add more branches if needed */}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date Picker */}
                <FormField
                  control={form.control}
                  name="date"
                  rules={{ required: "Appointment date is required" }}
                  render={() => (
                    <FormItem>
                      <FormLabel>Appointment Date <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="date"
                          render={({ field: { onChange, value } }) => (
                            <DatePicker
                              selected={value ? new Date(value) : null}
                              onChange={(date) => {
                                const formattedDate = date ? date.toISOString().split("T")[0] : "";
                                onChange(formattedDate);
                              }}
                              excludeDates={bookedDates}
                              placeholderText="Select a Date"
                              className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md w-full"
                              dateFormat="yyyy-MM-dd"
                            />
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Time (disabled input) */}
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Appointment Time <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input type="time" disabled {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button type="submit" className="w-full mt-2">
                  Book Appointment
                </Button>
              </form>
            </Form>
          </div>
        </div>
      

<div className="mt-10 max-w-4xl mx-auto">
  <h2 className="text-xl font-semibold mb-4">Your Booked Appointments</h2>

  {loadingAppointments ? (
    <p>Loading your appointments...</p>
  ) : userAppointments.length === 0 ? (
    <p>You have no booked appointments yet.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Time</th>
            <th className="px-4 py-2 border">Branch</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {userAppointments.map((appt) => {

            return (
              <tr key={appt.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{appt.date}</td>
                <td className="px-4 py-2 border">{appt.time}</td>
                <td className="px-4 py-2 border">{appt.branch}</td>
                <td className="px-4 py-2 border">{appt.paymentStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )}
</div>



{/* <div className="mt-10 max-w-lg mx-auto">
  <h2 className="text-xl font-semibold mb-4">Your Booked Appointments</h2>
  {loadingAppointments ? (
    <p>Loading your appointments...</p>
  ) : userAppointments.length === 0 ? (
    <p>You have no booked appointments yet.</p>
  ) : (
    <ul className="space-y-3">
      {userAppointments.map((appt) => (
        <li key={appt.id} className="border p-4 rounded shadow-sm">
       
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Time:</strong> {appt.time}</p>
          <p><strong>Branch:</strong> {appt.branch}</p>
          <p><strong>Status:</strong> {appt.paymentStatus}</p>
        </li>
      ))}
    </ul>
  )}
</div>  */}








      </div>
    </div>
  );
};

export default Appointment;
