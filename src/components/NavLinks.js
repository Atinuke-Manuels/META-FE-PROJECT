import React from 'react'
import '../App.css'
import headerImg from '../images/Little-lemon.png'
import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <div>
    <nav className='navbar'>
      <img src = {headerImg} alt='logo' height={50} width={50} className='navImg'/>
      <ul className='list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Specials">Menu</Link></li>
        <li><Link to="/BookingPage">Reservation</Link></li>
        <li><Link to="/Specials">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
    </div>
  )
}
