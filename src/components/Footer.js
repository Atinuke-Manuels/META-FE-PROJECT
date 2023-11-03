import React from 'react'
import headerImg from '../images/Little-lemon.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <img src= {headerImg} alt='logo' className='footerLogo'/>
        <section>
            <h5 className='footerHeading'>Doormat Navigation</h5>
            <ul className='footerList'>
                <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Specials">Menu</Link></li>
        <li><Link to="/BookingPage">Reservation</Link></li>
        <li><Link to="/Specials">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </section>
        <section>
            <h5 className='footerHeading'>Contact</h5>
            <ul className='footerList'>
                <li><a href='#Address'>Address</a></li>
                <li><a href='#Phone-number'>phone number</a></li>
                <li><a href='#Email'>Email</a></li>
            </ul>
        </section>
        <section>
            <h5 className='footerHeading'>Social media links</h5>
            <ul className='footerList'>
                <li><a href='#Address'>Address</a></li>
                <li><a href='#Phone-number'>phone number</a></li>
                <li><a href='#Email'>Email</a></li>
            </ul>
        </section>
    </footer>
  )
}
