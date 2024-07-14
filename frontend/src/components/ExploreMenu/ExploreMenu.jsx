import React from 'react'
import './ExploreMenu.css'
import menu_list from '../../assets/assets'

function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Explore a variety of delicious dishes and satisfy your cravings with just a few clicks. Choose your favorite meals and get them delivered hot and fresh to your doorstep</p>
        <div className='explore-menu-list'>
            {
                menu_list.map((item,index)=>{
                    return(
                        <div key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} className='explore-menu-image'/>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu