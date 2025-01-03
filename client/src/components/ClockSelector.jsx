"use client";
import React, { useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const ClockSelector = ({ selectedDate, onTimeSelect }) => {
  const [time, setTime] = useState(new Date());

  const isToday =
    selectedDate &&
    new Date(selectedDate).toDateString() === new Date().toDateString();
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const handleHourChange = (e) => {
    const newHour = parseInt(e.target.value, 10);
    const updatedTime = new Date(time);
    updatedTime.setHours(newHour);
    setTime(updatedTime);
    updateSelectedTime(updatedTime);
  };

  const handleMinuteChange = (e) => {
    const newMinute = parseInt(e.target.value, 10);
    const updatedTime = new Date(time);
    updatedTime.setMinutes(newMinute);
    setTime(updatedTime);
    updateSelectedTime(updatedTime);
  };

  const updateSelectedTime = (updatedTime) => {
    const formattedTime = updatedTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    onTimeSelect(formattedTime);
  };

  return (
    <div className="my-4">
      {!selectedDate ? (
        <p className="text-red-500 text-center font-bold">
          Please select a date first.
        </p>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-2">Select a Time</h2>
          <div className="flex justify-center">
            <Clock value={time} />
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Hour
              </label>
              <select
                value={time.getHours()}
                onChange={handleHourChange}
                className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!selectedDate}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option
                    key={i}
                    value={i}
                    disabled={isToday && i < currentHour} // Disable past hours if today
                  >
                    {i < 10 ? `0${i}` : i}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Minute
              </label>
              <select
                value={time.getMinutes()}
                onChange={handleMinuteChange}
                className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!selectedDate || (isToday && time.getHours() === currentHour)}
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <option
                    key={i}
                    value={i}
                    disabled={isToday && time.getHours() === currentHour && i < currentMinute} // Disable past minutes if today and same hour
                  >
                    {i < 10 ? `0${i}` : i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-center mt-4 text-gray-700">
            Selected Time:{" "}
            <strong>
              {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </strong>
          </p>
        </>
      )}
    </div>
  );
};

export default ClockSelector;
