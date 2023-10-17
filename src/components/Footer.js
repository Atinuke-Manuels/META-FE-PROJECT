import React from 'react'
import headerImg from '../images/Little-lemon.jpg'

export default function Footer() {
  return (
    <footer className='footer'>
      <img src= {headerImg} alt='logo' className='footerLogo'/>
        <section>
            <h5 className='footerHeading'>Doormat Navigation</h5>
            <ul className='footerList'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#menu'>Menu</a></li>
                <li><a href='#reservation'>Reservation</a></li>
                <li><a href='#onlineMenu'>Order Online</a></li>
                <li><a href='#login'>Login</a></li>
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
