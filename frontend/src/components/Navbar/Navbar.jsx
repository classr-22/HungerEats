import React, { useContext, useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets1.js';

function Navbar({setShowLogin}) {

  const [menu,setmenu] = useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
        <Link to='/'><h1 className='logo'>HungerEats</h1></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>{setmenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>{setmenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
          <SearchIcon></SearchIcon>
          <div className='navbar-search-icon'> 
            <Link to='/cart'><ShoppingBasketIcon></ShoppingBasketIcon></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          {!token ? 
            <button onClick={()=>setShowLogin(true)}>Sign In</button> : 
            <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr></hr>
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
            </div>
          }
          
        </div>
    </div>
  )
}

export default Navbar