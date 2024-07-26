import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets1'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function FoodItem({id,name,price,description,image}) {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext); 

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={url+"/images/"+image} alt=''></img>
            {
                !cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>
                    :<div className='food-item-counter'>
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)}></img>
                    </div>
            }   
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''></img>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem