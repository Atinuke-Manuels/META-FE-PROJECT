import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import rating1 from '../images/rating1.jpg'
import rating2 from '../images/rating2.jpg'
import rating3 from '../images/rating3.jpg'
import rating4 from '../images/rating4.jpg'

function Testimonials() {
  return (
    <div className='testimonials'>
      <h3>Testimonials</h3>
      <main className='rating'>
        <section className='testimonialSec'>
        <img src= {rating1} alt='rating1' className='ratingImg'/>
        <p>lovely food, friendly staff and great prices</p>
        <div className='ratingIcon'>
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStarHalf} className="gold-star" />
        </div>
      </section>
      <section className='testimonialSec'>
      <img src= {rating2} alt='rating1' className='ratingImg'/>
      <p>Excellent service delivery and good food</p>
        <div className='ratingIcon'>
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        </div>
      </section>
      <section className='testimonialSec'>
      <img src= {rating3} alt='rating1' className='ratingImg'/>
      <p>I will definitely come back again</p>
        <div className='ratingIcon'>
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStarHalf} className="gold-star" />
        </div>
      </section>
      <section className='testimonialSec'>
      <img src= {rating4} alt='rating1' className='ratingImg'/>
      <p>friendly staff and affordable dishes.</p>
        <div className='ratingIcon'>
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        <FontAwesomeIcon icon={faStar} className="gold-star" />
        </div>
      </section>
      </main>
    </div>
  )
}

export default Testimonials
