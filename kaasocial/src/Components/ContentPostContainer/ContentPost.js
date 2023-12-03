import React from 'react'
import "./contentpost.css"
import profileIcon from "../Images/profileIcon.png"

export default function ContentPost() {
  return (
    <div>
        <div className='ContentUploadContainer'>
            <div>
                <img src={`${profileIcon}`} className='profileiconimg' alt='' />
                <input type="text" className='contentWriting'></input>

            </div>

        </div>
    </div>
  )
}
