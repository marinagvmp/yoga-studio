import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';

export default function Calendar() {
  const times = ['7:00 AM', '10:00 AM', '5:00 PM', '8:00 PM'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const navigate = useNavigate();

  const getClassType = (time) => {
    if (time === '7:00 AM' || time === '8:00 PM') return 'Yin Yoga';
    if (time === '10:00 AM') return 'Chair Yoga';
    if (time === '5:00 PM') return 'Power Flow';
    return 'Yoga Class';
  };

  const handleBooking = (day, time) => {
    const classType = getClassType(time);
    const classInfo = `${classType} on ${day} at ${time}`;
    navigate('/booking', { state: { classInfo } });
  };

  return (
    <div className="calendar-container">
      <h2>Weekly Class Schedule</h2>
      <div className="calendar-grid">
        <div className="calendar-header"></div>
        {days.map((day) => (
          <div key={day} className="calendar-header">{day}</div>
        ))}

        {times.map((time) => (
          <React.Fragment key={time}>
            <div className="calendar-time">{time}</div>
            {days.map((day) => (
              <div
                key={day + time}
                className="calendar-cell clickable"
                onClick={() => handleBooking(day, time)}
              >
                {getClassType(time)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
