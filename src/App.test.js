import { render, screen , fireEvent} from '@testing-library/react';
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
  const expectedInitialState = ['00:00','09:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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

describe('BookingForm', () => {
  it('should render the form with HTML5 validation attributes', () => {
    render(<Router><BookingForm availableTimes={[]} /></Router>);

    const dateInput = screen.getByLabelText('Choose a date');
    const timeSelect = screen.getByLabelText('Choose a time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('pattern', '\\d{4}-\\d{2}-\\d{2}');

    expect(timeSelect).toHaveAttribute('id', 'res-time');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '0');
    expect(guestsInput).toHaveAttribute('max', '10');

    expect(occasionSelect).toHaveAttribute('id', 'occasion');
  });

it('should validate date correctly', () => {
  render(<Router><BookingForm availableTimes={[]} /></Router>);
  const dateInput = screen.getByLabelText('Choose a date');

  fireEvent.change(dateInput, { target: { value: '2023-11-01' } });
  fireEvent.submit(screen.getByRole('button', { name: 'Make Your Reservation' }));

  // expect(screen.getByTestId('dateError')).toBeInTheDocument();
  expect(screen.getByText('Please choose a date that is today or in the future.')).toBeInTheDocument();
});

  it('should validate time correctly', () => {
    render(<Router><BookingForm availableTimes={[]} /></Router>);
    const timeSelect = screen.getByLabelText('Choose a time');

    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Make Your Reservation' }));

    expect(screen.getByText('Please choose a time that is in the future.')).toBeInTheDocument();
  });

  it('should validate guests correctly', () => {
    render(<Router><BookingForm availableTimes={[]} /></Router>);
    const guestsInput = screen.getByLabelText('Number of guests');

    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Make Your Reservation' }));

    expect(screen.getByText('Minimum of 1 guest must be selected.')).toBeInTheDocument();
  });

it('should validate occasion correctly', () => {
  render(<Router><BookingForm availableTimes={[]} /></Router>);
  const occasionSelect = screen.getByLabelText('Occasion');

  fireEvent.change(occasionSelect, { target: { value: '' } });
  fireEvent.submit(screen.getByRole('button', { name: 'Make Your Reservation' }));

  expect(screen.getByText('Please select an occasion.')).toBeInTheDocument();
});
});



