"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="my-4 mx-auto">
      <h2 className="text-lg font-bold mb-2">Select a Date</h2>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        className="shadow-lg rounded-lg border border-gray-300"
        minDate={new Date()} // Restrict past dates
      />
    </div>
  );
};

export default CalendarView;
