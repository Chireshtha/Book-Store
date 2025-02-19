import React from 'react'
import logo from '../Images/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import {FaCartPlus} from 'react-icons/fa'

const Header = ({size, warning}) => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='loading logo' />
        </div>
        <div className='navbar-1'>
                <Link to='/' className='text-decoration-none' ><span>Home</span></Link>
                <Link to='/BookDetails/:bookId' className='text-decoration-none'><span>Book Details</span></Link>
                <Link to='/ShoppingCart' className='text-decoration-none'><span>Shopping Cart</span></Link>
        </div>
        <div className='cart'>
          <Link to='/ShoppingCart'><i className='fa fa-cart-plus'><FaCartPlus /> </i>
          <span>{size}</span></Link>
        </div>
        {warning && <div className='alert alert-danger'>
        Item has been already added to the cart
        </div>}
    </div>
  )
}

export default Header
