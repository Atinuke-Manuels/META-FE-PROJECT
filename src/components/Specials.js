import React from 'react'
import food1 from '../images/food1.jpg'
import food2 from '../images/food2.jpg'
import food3 from '../images/food3.jpg'
import Footer from './Footer'
import Testimonials from './Testimonials'
import NavLinks from './NavLinks'

export default function Specials() {
  return (
    <main>
    <NavLinks/>
      <section className='mainHeader'>
        <h3>Specials</h3>
        <button className='headerBtn' id='onlineMenu'>Online menu</button>
      </section>
      <div className='mainFoodSec'>
        <section className='foodSection'>
          <img src= {food1} alt='food1' className='mainImage'/>
          <div className='pTags'>
            <p className='foodName'>Get Pancakes</p>
            <p className='price'>$2.50</p>
          </div>
          <p>
            Our pancakes are a delicious and satisfying choice, made with your taste buds in mind. The primary ingredients include fluffy batter, rich syrup, and a variety of delectable toppings, creating a mouthwatering breakfast experience.
          </p>
          <div className='pTags'>
            <p className='foodName'>Order a delivery</p>
            <p className='deliveryPrice'>$1</p>
          </div>
        </section>
        <section className='foodSection'>
          <img src= {food2} alt='food1' className='mainImage'/>
          <div className='pTags'>
            <p className='foodName'>Get Burger</p>
            <p className='price'>$3.20</p>
          </div>
          <p>Our burger is a scrumptious and hearty choice, tailored to tantalize your taste buds. The key elements include a juicy patty, fresh vegetables, melted cheese, and an array of savory condiments, delivering an unforgettable burger experience.</p>
          <div className='pTags'>
            <p className='foodName'>Order a delivery</p>
            <p className='deliveryPrice'>$1</p>
          </div>
        </section>
        <section className='foodSection'>
          <img src= {food3} alt='food1' className='mainImage'/>
          <div className='pTags'>
            <p className='foodName'>Get Pasta</p>
            <p className='price'>$4.30</p>
          </div>
          <p>Our pasta dish is a delightful and satisfying choice, prepared with your enjoyment in mind. The primary ingredients include al dente noodles, flavorful sauce, and a variety of savory toppings, creating a mouthwatering pasta experience.</p>
          <div className='pTags'>
            <p className='foodName'>Order a delivery</p>
            <p className='deliveryPrice'>$0.98</p>
          </div>
        </section>
      </div>
      <Testimonials/>
      <Footer/>
    </main>
  )
}
