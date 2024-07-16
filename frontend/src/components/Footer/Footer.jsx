import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets1'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h1>Hunger Eats</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sequi! Magni maiores doloremque veritatis. Voluptate earum pariatur nostrum eligendi excepturi amet repellendus veritatis error quia laborum, officiis est ea sunt.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-999-999-9999</li>
                    <li>HungerEats@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <p className='footer-copyright'>Copyright 2024 @ Hunger Eats</p>
    </div>
  )
}

export default Footer