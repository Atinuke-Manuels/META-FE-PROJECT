import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingPage';
import {initializeTimes, updateTimes} from './components/BookingPage';
import { BrowserRouter as Router } from 'react-router-dom';
// import { initializeTimes, updateTimes } from './components/BookingPage';

test('Renders the BookingForm heading', () => {
      render(
    <Router>
      <BookingForm />
    </Router>
  );
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

// Test for initializeTimes function
test('initializeTimes returns the correct initial state', () => {
  const expectedInitialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const initialState = initializeTimes();
  expect(initialState).toEqual(expectedInitialState);
});

// // Test for updateTimes function
test('updateTimes changes the available times based on the selected date', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const selectedDate = '12/01/2023'; // Replace with a suitable date value
  const updatedState = updateTimes(selectedDate, initialState);

  // Modify this expectation to reflect the logic you implement in updateTimes
  expect(updatedState).toEqual(initialState);
});


