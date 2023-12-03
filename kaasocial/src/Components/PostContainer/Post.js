import React from 'react'
import "./post.css"
import profileIcon from "../Images/profileIcon.png"
import woman from "../Images/woman.png"
import likeicon from "../Images/likeicon.png"
import commenticon from "../Images/commenticon.png"
export default function Post() {
    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <img src={`${profileIcon}`} className='postImage' alt='' />
                    <p style={{ marginLeft: "5px" }}>NK</p>
                </div>
                <p style={{ textAlign: "start", width: "96%", marginLeft: 10, marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src={`${woman}`} className='postImages' alt='' />
                <div>
                    <div style={{display:"flex", marginLeft: "10px"}}>
                        <div>
                            <img src={`${likeicon}`} className='postImage' alt='' />
                            <p>100 Likes</p>
                        </div>
                        <div>
                            <img src={`${commenticon}`} className='postImage' alt='' />
                            <p>85 Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
