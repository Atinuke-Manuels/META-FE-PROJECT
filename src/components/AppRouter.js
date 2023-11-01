import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nav/>}/>
        <Route path="/Header"  element={<Header/>}/>
        <Route path="/Specials"  element={<Specials/>}/>
        <Route path="/Testimonials"  element={<Testimonials/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/BookingPage" element={<BookingPage/>}/>
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}/>
      </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;
