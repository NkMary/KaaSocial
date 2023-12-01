import React from 'react'
import "./navbar.css";
import searchIcon from "../Images/searchIcon.png";
import notificationIcon from"../Images/notificationIcon.png";
import messageIcon from "../Images/messageIcon.png";
import profileIcon from "../Images/profileIcon.png";

export default function Navbar() {
  return (
    <div className='mainNavbar'>
        <div className='LogoContainer'>
            <p>KaaSocial</p>
        </div>
        <div>
            <div className='searchInputContainer'>
                <img src={`${searchIcon}`} className="searchIcon" alt=""/> 
                <input type="text" className='searchInput' placeholder='Find people from Abiriba' name="" id="" />
            </div>
        </div>
        <div className='IconsContainer'>
            <img src={`${notificationIcon}`} className="Icons" alt=""/> 
            <img src={`${messageIcon}`} className="Icons" alt=""/> 
            <div style={{display:'flex', alignItems: 'center'}}>
                <img src={`${profileIcon}`} className="ProfileImage" alt=""/> 
                <p style={{marginLeft: '5px'}}>Nk</p>
            </div>
        </div>
    
    
    </div>
  )
}
