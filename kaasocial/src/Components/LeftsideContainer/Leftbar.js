import React from 'react'
import "./leftbar.css"
import nelson from "../Images/nelson.png"
import nyc from "../Images/nyc.png"
import houston from "../Images/houston.png"
import chicago from "../Images/chicago.png"
import la from "../Images/la.png"
import atlanta from "../Images/atlanta.png"

export default function Leftbar() {
  return (
    <div className='Leftbar'>
      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>Notifications</p>
          <p style={{ color: "#a0561f" }}>See all</p>
        </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson started following you</p>
              <img src={`${nelson}`} className="followinguserimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson started following you</p>
              <img src={`${nelson}`} className="followinguserimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
          <div style={{display:'flex', alignItems: 'center', marginTop:-10}}>
              <img src={`${nelson}`} className="notificationimg" alt=""/> 
              <p style={{marginLeft:'5px', color:"#a0561f", fontSize:13, textAlign:"start", width: "120px"}}>Nelson likes your post</p>
              <img src={`${nelson}`} className="likeimage" alt=""/> 
          </div>
         
          
      </div>

      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>Chapters</p>
              <p style={{ color: "#a0561f" }}>See all</p>
        </div>
        <div>
              <img src={`${atlanta}`} className="chaptersimg" alt=""/> 
              <p>Atlanta</p> 
              <img src={`${chicago}`} className="chaptersimg" alt=""/> 
              <p>Chicago</p>
              <img src={`${houston}`} className="chaptersimg" alt=""/> 
              <p>Houston</p>
              <img src={`${la}`} className="chaptersimg" alt=""/> 
              <p>Los Angeles</p>
              <img src={`${nyc}`} className="chaptersimg" alt=""/> 
              <p>New York</p>
            
        </div>
         
    
      </div>
    </div>

    
  )
}
