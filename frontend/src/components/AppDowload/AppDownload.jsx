import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets1'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For better Experince Dowload <br/> Hunger Eats App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload