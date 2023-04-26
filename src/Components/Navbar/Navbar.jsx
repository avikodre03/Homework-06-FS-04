import React from 'react'
import './NavBar.css'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='Navbar'> 
    <div className="logo">
      <h1>logo</h1>
    </div>
    <div className="tabs">
      <p style={{color:"blueviolet"}}>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
    <div className="social">
      <FaFacebookF/>
      <AiOutlineTwitter/>
      <FiInstagram/>
    </div>
    </div>
  )
}

export default Navbar