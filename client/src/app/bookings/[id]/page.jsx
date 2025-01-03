"use client";
import Button from "@/components/Button";
import { fetchBookings, deleteBooking } from "@/utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";  // Importing React.use

export default function BookingDetailsPage({ params }) {
  const [booking, setBooking] = useState(null);
  const router = useRouter();
  
  // Unwrap the params using React.use()
  const { id } = use(params);

  // Fetch bookings on client-side using useEffect
  useEffect(() => {
    const getBookingDetails = async () => {
      const bookings = await fetchBookings();
      const foundBooking = bookings.find((b) => b._id === id);
      setBooking(foundBooking);
    };
    
    getBookingDetails();
  }, [id]);

  const handleClick = async (id) => {
    try {
      const response = await deleteBooking(id);
      alert("Booking deleted");
      router.push("/");
    } catch (err) {
      alert("Error in deleting the booking");
    }
  };

  if (!booking) {
    return <p>Booking not found.</p>;
  }

  return (
    <div className="mx-auto w-4/6">
      <h1 className="text-4xl p-5 font-bold bg-blue-400 mb-4">Booking Details</h1>
      <div className="flex flex-col justify-center text-2xl font-semibold">
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Contact:</strong> {booking.contact}</p>
        <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Guests:</strong> {booking.guests}</p>
      </div>
      <Button handleClick={() => handleClick(booking._id)} />
    </div>
  );
}
