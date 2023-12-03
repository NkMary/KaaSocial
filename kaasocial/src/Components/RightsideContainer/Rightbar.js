import React from 'react'
import './rightbar.css'
import events from "../Images/events.png"
import learn from "../Images/learn.png"
import profileicon from "../Images/profileIcon.png"
import addfriend from "../Images/addfriend.png"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div>
          <p style={{ textAlign: 'center', marginLeft: '10px', fontSize: '15px', marginTop: '20px' }}>Explore Events</p>
          <img src={`${events}`} className='eventsimg' alt="" />
        </div>

        <div className='rightcontainer'>
          <div>
            <p style={{ textAlign: 'center', marginLeft: '10px', fontSize: '15px', marginTop: '20px' }}>Learn Abiriba</p>
            <img src={`${learn}`} className='eventsimg' alt="" />
          </div>
        </div>

        <div className='rightcontainer'>
          <p style={{ textAlign: 'center', marginLeft: '10px', fontSize: '15px', marginTop: '20px' }}>Suggested for you</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
            <div style={{ display: 'flex', alignItems: "center" }} >
              <img src={`${profileicon}`} className='profileimage' alt="" />
              <p style={{ marginLeft: '10px' }}>NK</p>
            </div>
            <div style={{ marginRight: '13px' }}>
              <img src={`${addfriend}`} className='addfriend' alt="" />
            </div>
          </div>
          <div style={{ marginTop: "-10px" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
              <div style={{ display: 'flex', alignItems: "center" }} >
                <img src={`${profileicon}`} className='profileimage' alt="" />
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>NK</p>
                <p style={{ marginLeft: '10px', textAlign: 'start', marginTop: "-16px" }}></p>
              </div>
              <div style={{ marginRight: '13px' }}>
                <img src={`${addfriend}`} className='addfriend' alt="" />
              </div>
            </div>



          </div>

        </div>

      </div>
    </div>
  )
}
