import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import Footer from './Footer';
import URL from './ApiFile'; // Import the API URL
import NavLinks from './NavLinks';

export function initializeTimes() {
    return ['00:00', '09:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }


export function updateTimes(selectedDate, availableTimes) {
  // Filter the available times to keep only those that are later than the current time
  const currentTime = new Date();
  const updatedTimes = availableTimes.filter(time => {
    const [hour, minute] = time.split(':');
    const timeDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hour, minute);
    return timeDate > currentTime;
  });

  return updatedTimes;
}



function BookingPage() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, undefined, initializeTimes);
  const [, setData] = useState([]);

  useEffect(() => {
    // Define the URL of the API
    const apiUrl = URL; // Use the imported URL directly as a string

    // Use the fetch API to make a GET request to the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ flex: 1, margin: 'auto' }}>
    <NavLinks/>
      <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} />
      <Footer />
    </div>
  );
}

export default BookingPage;

