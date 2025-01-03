import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const { name, contact, date, time, guests } = req.body;
    const existingBooking = await Booking.findOne({ date, time });

    if (existingBooking) {
      return res.status(400).json({ error: 'Slot already booked.' });
    }

    const booking = new Booking({ name, contact, date, time, guests });
    await booking.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking.' });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings.' });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: 'Booking deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete booking.' });
  }
};
