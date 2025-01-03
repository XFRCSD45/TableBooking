import { fetchBookings } from "@/utils/api";
export default async function BookingsPage() {
  const bookings = await fetchBookings();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id} className="border-b py-2">
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Guests:</strong> {booking.guests}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
