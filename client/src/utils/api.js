import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchBookings = async () => {
  const response = await axios.get(`${API_BASE_URL}/bookings`);
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/bookings/${id}`);
  return response.data;
};
