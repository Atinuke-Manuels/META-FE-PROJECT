import React from 'react'
import '../App.css'
import Footer from './Footer'
import NavLinks from './NavLinks'


export default function Nav() {
  return (
    <>
    <NavLinks/>
    <section style={{textAlign: 'center', padding: '4em 0'}}>
      <h1>Welcome to Little Lemon Restaurant.</h1>
      <h4>Please feel free to navigate through our site. We do hope you have a pleasant experience.</h4>
    </section>
    <Footer/>
    </>
  )
}
