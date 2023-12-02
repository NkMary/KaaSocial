import React from 'react'
import "./leftbar.css"
import nelson from "../Images/nelson.png"

export default function Leftbar() {
  return (
    <div className='Leftbar'>
      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>Notifications</p>
          <p style={{ color: "#a0561f" }}>See all</p>
        </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson started following you</p>
              <img src={`${nelson}`} className="followinguserimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson started following you</p>
              <img src={`${nelson}`} className="followinguserimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-13}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
      </div>
    </div>
  )
}
