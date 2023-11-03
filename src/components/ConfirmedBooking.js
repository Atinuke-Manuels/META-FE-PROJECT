import React from 'react'
import Footer from './Footer'
import NavLinks from './NavLinks'

function ConfirmedBooking() {
  return (
    <div style={{flex: 1, textAlign: 'center',justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder'}}>
      <NavLinks/>
      <h1>Your Booking was Successful!!!</h1>
      <Footer/>
    </div>
  )
}

export default ConfirmedBooking
