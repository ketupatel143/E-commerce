import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Style Way</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link className='shopcat-link' to='/'> Shop </Link>  {menu==="shop"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link className='shopcat-link' to='/mens'>Men</Link> {menu==="mens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link className='shopcat-link' to='/womens'>Women</Link> {menu==="womens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link className='shopcat-link' to='/kids'>Kids</Link>{menu==="kids"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'> <button>Login</button> </Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
