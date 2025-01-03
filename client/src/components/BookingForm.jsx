"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const BookingForm = ({ selectedDate, selectedTime, onBookingSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    guests: '',
  });
 const router=useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time.');
      return;
    }

    const bookingData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    };

    try {
       await onBookingSuccess(bookingData);
      setFormData({ name: '', contact: '', guests: '' });
      alert('Booking successful!');
    } catch (error) {
      alert('Error creating booking: ' + error.response?.data?.error || 'Unknown error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Contact</label>
        <input
          name="contact"
          type="text"
          placeholder="Your Contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Guests</label>
        <input
          name="guests"
          type="number"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Book Table
      </button>
    </form>
  );
};

export default BookingForm;
