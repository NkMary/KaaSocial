import React from 'react'
import "./contentpost.css"
import profileIcon from "../Images/profileIcon.png"
import imageicon from "../Images/imageicon.png"
import emoji from "../Images/emoji.png"
import videoicon from "../Images/videoicon.png"

export default function ContentPost() {
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: 'flex', alignItems: "center", padding: "10" }}>
          <img src={`${profileIcon}`} className='profileiconimg' alt='' />
          <input type="text" className='contentWriting' placeholder='What is on your mind?'></input>
        </div>

        <div style={{ display: 'flex', marginLeft: '10px' }}>
          <div>
            <img src={`${imageicon}`} className='icons' alt='' />
            <img src={`${emoji}`} className='icons' alt='' />
            <img src={`${videoicon}`} className='icons' alt='' />
            <button style={{marginLeft:"400px", paddingLeft:"10px", paddingRight:"20px", paddingTop:6, paddingBottom:6, border:"none", backgroundColor: "black", color:"white" }}>Post</button>
          </div>
        </div>

      </div>
    </div>
  )
}
