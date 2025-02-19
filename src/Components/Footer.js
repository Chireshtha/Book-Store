import React from 'react'
import logo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../Styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'> 
    <div className='footer'>
      <div className='logo'>
        <img src={logo} alt='loading' />
      </div>
      <div className='q-links'>
        <h3>Book Store</h3>
        <div className='book-link'>
        <Link to='/' className='text-decoration-none'><span>Home</span></Link>
        <Link to='/BookDetails/:bookId' className='text-decoration-none'><span>Book Details</span></Link>
        <Link to='/ShoppingCart' className='text-decoration-none'><span>Shopping Cart</span></Link>
        </div>
      </div>
      <div className='contact-us'>
        <h3>Contact Us</h3>
        <div className='book-link'>
        <span>Email: info@companyname.com</span>
        <span>Phone: +91 98765 43210</span>
        </div>
      </div>
      <div className='social-media'>
        <h3>Follow Us</h3>
        <div className='link'>
        <Link to='https://www.facebook.com/'><i className='fa fa-facebook'><FaFacebook /></i></Link>
        <Link to='https://www.instagram.com/'><i className='fa fa-instagram'><FaInstagram /></i></Link>
        <Link to='https://www.linkedin.com/'><i className='fa fa-linkedin'><FaLinkedin /></i></Link>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div className='copy-right'>
      <p>&copy;Copyright ABC Software Technologies Pvt Ltd 2025</p>
    </div>
    </div>
  )
}

export default Footer
