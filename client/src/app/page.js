"use client"
import { useState } from 'react';
import BookingForm from '@/components/BookingForm';
import CalendarView from '@/components/CalenderView';
import BookingSummary from '@/components/BookingSummary';
import {createBooking } from '@/utils/api';
import ClockSelector from '@/components/ClockSelector';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [booking, setBooking] = useState(null);
  const router=useRouter();
  const handleBookingSuccess = async (bookingData) => {
    const newBooking = await createBooking(bookingData);
    const id=newBooking._id;
    setBooking(newBooking);
    router.push(`/bookings/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Restaurant Table Booking
      </h1>
      <CalendarView onDateSelect={setSelectedDate} />
      <ClockSelector selectedDate={selectedDate} onTimeSelect={setSelectedTime} />
      <BookingForm
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onBookingSuccess={handleBookingSuccess}
      />
      <BookingSummary booking={booking} />
    </div>
  );
}