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
            <button style={{marginLeft:"400px", marginBottom:"10px", paddingLeft:"10px", paddingRight:"20px", paddingTop:6, paddingBottom:6, border:"none", backgroundColor: "#5f341a", color:"white", borderRadius:"5px", cursor:"pointer"}}>Post</button>
          </div>
        </div>

      </div>
    </div>
  )
}
