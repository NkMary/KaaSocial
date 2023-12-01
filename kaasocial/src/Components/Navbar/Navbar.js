import React from 'react'
import "./navbar.css"
import searchIcon from "../Images/searchIcon.png"

export default function Navbar() {
  return (
    <div className='mainNavbar'>
        <div>
            <p>KaaSocial</p>
        </div>
        <div>
            <div>
                <img src={`${searchIcon}`} alt=""/> 
                <input type="text" name="" id="" />
            </div>
        </div>
        <div>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <div>
                <img src="" alt=""/>
                <p>Nk</p>
            </div>
        </div>
    
    
    </div>
  )
}
