import React, { useState } from 'react'
import "./post.css"
import profileIcon from "../Images/profileIcon.png"
import woman from "../Images/woman.png"
import likeicon from "../Images/likeicon.png"
import commenticon from "../Images/commenticon.png"
import shareicon from "../Images/shareicon.png"
import moreoptions from "../Images/moreoptions.png"
import anotherlikeicon from "../Images/anotherlikeicon.png"
export default function Post() {
    const[Like, setLike] = useState(likeicon);
    const[count, setCount]= useState(10);
    const[Comments, setComments]= useState([]);
    const[commentwriting, setcommentwriting] = useState('')

    const handleLike=()=>{
        if(Like === likeicon){
            setLike(anotherlikeicon)
            setCount(count+1);
        }else{
            setLike(likeicon)
            setCount(count-1);
        }
    }

    const addComment = ()=>{
        const comment = {
            "id": "683fkfnaskmfkf9nd9fmnfn443",
            "username": "NK",
            "title": `${commentwriting}`
        }
        setComments(Comments.concat(comment));
    }

    const handleComment= ()=>{
       addComment()

    console.log(Comments)
    }
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
                                <img src={`${Like}`} className='iconsforpost' onClick={handleLike} alt='' />
                                <p style={{marginLeft:"6px"}}>{count} Likes</p>
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
                    <div style={{display:"flex", alignItems:"center"}}>
                        <img src={`${profileIcon}`} className='postImage' alt='' />
                        <p style={{marginLeft:"5px"}}></p>
                        <input type="text" className='commentinput' placeholder='Write your thoughts' onChange={(e)=>setcommentwriting(e.target.value)} />
                        <button className='addCommentbtn' onClick={handleComment}>Add Comment</button>
                    </div>
                </div>
            </div>
        )
    }
