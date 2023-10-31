import React, { useState } from 'react';

export default function BookingForm() {
  const [date, setDate] = useState(''); // State variable for date
  const [time, setTime] = useState(''); // State variable for time
  const [guests, setGuests] = useState(1); // State variable for number of guests
  const [occasion, setOccasion] = useState('Birthday'); // State variable for occasion

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' , textAlign: 'center', margin: '0 auto', paddingTop: '4rem', fontSize: '1.2rem'}}>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {availableTimes.map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
}
