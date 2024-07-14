import React, { useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {

  const [menu,setmenu] = useState("home");

  return (
    <div className='navbar'>
        <h1 className='logo'>HungerEats</h1>
        <ul className='navbar-menu'>
          <li onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""}>home</li>
          <li onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""}>menu</li>
          <li onClick={()=>{setmenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</li>
          <li onClick={()=>{setmenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className='navbar-right'>
          <SearchIcon></SearchIcon>
          <div className='navbar-search-icon'> 
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <div className='dot'></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar