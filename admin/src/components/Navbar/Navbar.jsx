import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'

function Navbar() {
  return (
    <div className='navbar'>
        <h3 className='logo'>HungerEats Admin Panel</h3>
        <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar