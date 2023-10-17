import React from 'react'
import headerImage from '../images/headerImg.jpg'
import Footer from './Footer'

export default function Header() {
  return (
    <header>
      <div className='headerDiv' id='home'>
      <div className='headerP'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p >Welcome to Little Lemon, the heartwarming family restaurant where tradition meets taste. At Little Lemon, we take pride in offering a delightful dining experience that brings families together. Our secret recipe? A blend of incredible traditional dishes served with a dash of exceptional service and a pinch of affordability.

Our menu is a culinary journey through time, with each dish crafted to perfection, just like grandma used to make. From hearty comfort food to delectable classics, every bite at Little Lemon is a taste of nostalgia, reminding you of home-cooked meals shared with loved ones.
</p>
      <button className='headerBtn'>Reserve a table</button>
      </div>
      <img src= {headerImage} alt='headerImage' className='headerImage'/>
      </div>
      <Footer/>
    </header>
  )
}
