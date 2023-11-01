import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm(props) {
  const [date, setDate] = useState(''); // State variable for date
  const [time, setTime] = useState(''); // State variable for time
  const [guests, setGuests] = useState(1); // State variable for the number of guests
  const [occasion, setOccasion] = useState('Birthday'); // State variable for occasion
  const navigate = useNavigate();
  const availableTimes = props.availableTimes; // Get availableTimes from props
 

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/ConfirmedBooking')
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <form  onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '400px', gap: '10px', textAlign: 'center', margin: '0 auto', fontSize: '1rem' }}>
        <h1>Reserve a table</h1>
        <label htmlFor="res-date">Choose date</label>
        {/* <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            props.dispatchTimes(e.target.value); // Dispatch the new date
          }}
        /> */}
        <input type='date' value={date} onChange={(e) => setDate(e.target.value )} id='res-date'/>

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

export default BookingForm