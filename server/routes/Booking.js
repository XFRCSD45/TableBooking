import express from 'express';
import { createBooking, getBookings, deleteBooking } from '../controllers/Booking.js';

const router = express.Router();

router.post('/bookings', createBooking);
router.get('/bookings', getBookings);
router.delete('/bookings/:id', deleteBooking);

export default router;
