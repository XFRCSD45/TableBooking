"use client"
const BookingSummary = ({ booking }) => {
  if (!booking) return null;

  return (
    <div className="mt-4 bg-green-100 p-4 rounded shadow-md">
      <h2 className="text-xl font-bold text-green-700">Booking Confirmed</h2>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Contact:</strong> {booking.contact}</p>
      <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Guests:</strong> {booking.guests}</p>
    </div>
  );
};

export default BookingSummary;

  