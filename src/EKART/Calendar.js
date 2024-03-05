import React, { useState } from 'react';
import './Calendar.css'

const Calendar = ({ selectedDate, onDateClick }) => {
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [year, setYear] = useState(selectedDate.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handleDateClick = (day) => {
    const selected = new Date(year, month, day);
    onDateClick(selected);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setYear(year - 1)}>Prev Year</button>
        <button onClick={() => setMonth(month - 1)}>Prev Month</button>
        <h2>{new Date(year, month).toLocaleDateString('en-us', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setMonth(month + 1)}>Next Month</button>
        <button onClick={() => setYear(year + 1)}>Next Year</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">
          {[...Array(firstDayOfMonth).fill(null), ...days].map((day, index) => (
            <div key={index} className={`calendar-day ${day === selectedDate.getDate() && 'selected'}`} onClick={() => handleDateClick(day)}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

