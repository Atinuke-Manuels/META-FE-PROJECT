import React from 'react'
import aboutImage from '../images/aboutImg1.jpg'
import secondImg from '../images/aboutImg2.jpg'
import Footer from './Footer'
import NavLinks from './NavLinks'

function About() {
  return (
    <div id='about' className='about'>
    <NavLinks/>
    <div className='aboutHeaderDiv' id='home'>
      <div className='headerP'>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p >Step into Little Lemon, the cozy family eatery where time-honored flavors take the stage. At Little Lemon, we take immense pride in curating an enchanting dining experience that unites families. Our unique recipe for success? A fusion of cherished traditional recipes infused with top-tier service and pocket-friendly pricing. Our menu embarks on a gastronomic voyage through the ages, with each dish crafted to perfection, just like the ones prepared by your grandmother. Whether you crave hearty comfort fare or exquisite classics, every bite at Little Lemon evokes cherished memories of homemade meals shared with your nearest and dearest.
</p>
      </div>
      <div className='aboutImgDiv'>
      <img src= {aboutImage} alt='headerImage' className='aboutImage'/>
      <img src= {secondImg} alt='headerImage' className='secondImg'/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
