import React from 'react'
import '../App.css'
import headerImg from '../images/Little-lemon.jpg'


export default function Nav() {
  return (
    <nav className='navbar'>
      <img src = {headerImg} alt='logo' height={50} width={50} className='navImg'/>
      <ul className='list'>
        <li><a href='#home' className='anchor'>Home</a></li>
        <li><a href='#about' className='anchor'>About</a></li>
        <li><a href='#menu' className='anchor'>Menu</a></li>
        <li><a href='#reservation' className='anchor'>Reservation</a></li>
        <li><a href='#onlineMenu' className='anchor'>Order Online</a></li>
        <li><a href='#login' className='anchor'>Login</a></li>
      </ul>
    </nav>
  )
}
