import React, { useState } from 'react'
import "./post.css"
import profileIcon from "../Images/profileIcon.png"
import woman from "../Images/woman.png"
import likeicon from "../Images/likeicon.png"
import commenticon from "../Images/commenticon.png"
import shareicon from "../Images/shareicon.png"
import moreoptions from "../Images/moreoptions.png"
export default function Post() {
    const[Like, setLike] = useState
    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <img src={`${profileIcon}`} className='postImage' alt='' />
                    <div>
                        <p style={{ marginLeft: "5px", textAlign:"start"}}>NK</p>
                        <p style={{ fontSize: "9px", textAlign:"start", marginLeft:5, marginTop:-13, color:"#a0561f"}}>Following by NK </p>

                    </div>
                    <p style={{ marginLeft: "5px" }}></p>
                    <img src={`${moreoptions}`} className='moreoptionsicon' alt='' />
                </div>
                <p style={{ textAlign: "start", width: "96%", marginLeft: 10, marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
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
