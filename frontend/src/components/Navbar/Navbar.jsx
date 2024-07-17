import React, { useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {

  const [menu,setmenu] = useState("home");

  return (
    <div className='navbar'>
        <h1 className='logo'>HungerEats</h1>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>{setmenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>{setmenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
          <SearchIcon></SearchIcon>
          <div className='navbar-search-icon'> 
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <div className='dot'></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar