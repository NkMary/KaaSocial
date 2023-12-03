import React from 'react'
import "./post.css"
import profileIcon from "../Images/profileIcon.png"
import woman from "../Images/woman.png"
import likeicon from "../Images/likeicon.png"
import commenticon from "../Images/commenticon.png"
import shareicon from "../Images/shareicon.png"
import moreoptions from "../Images/moreoptions.png"
export default function Post() {
    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <img src={`${profileIcon}`} className='postImage' alt='' />
                    <p style={{ marginLeft: "5px" }}>NK</p>
                    <img src={`${moreoptions}`} className='moreoptionsicon' alt='' />
                </div>
                <p style={{ textAlign: "start", width: "96%", marginLeft: 10, marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src={`${woman}`} className='postImages' alt='' />
                <div style={{display:"flex"}}>
                    <div style={{display:"flex", marginLeft: "10px"}}>
                        <div style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                            <img src={`${likeicon}`} className='iconsforpost' alt='' />
                            <p style={{marginLeft:"6px"}}>100 Likes</p>
                        </div>
                        <div style={{display:"flex", alignItems:"center", marginLeft:20, cursor:"pointer"}}>
                            <img src={`${commenticon}`} className='iconsforpost' alt='' />
                            <p style={{marginLeft:"6px"}}>85 Comments</p>
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center", marginLeft:70, cursor:"pointer"}}>
                            <img src={`${shareicon}`} className='iconsforpost' alt='' />
                            <p style={{marginLeft:"6px"}}>Share</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
