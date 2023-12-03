import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./profile.css"
import ProfileLeftbar from '../../Components/ProfileLeftsideContainer/ProfileLeftbar'
import MainPost from '../../Components/MainPostContainer/MainPost'
import ProfileRightbar from '../../Components/ProfileRightsideContainer/ProfileRightbar'

export default function Profile() {
  return (
    <div className='profileContainer'>
        <Navbar />
        <div className= 'subProfileContainer'>
            <ProfileLeftbar />
            <MainPost />
            <ProfileRightbar />

        </div>
    </div>
  )
}
