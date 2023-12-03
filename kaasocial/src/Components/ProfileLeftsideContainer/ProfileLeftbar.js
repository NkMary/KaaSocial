import React from 'react'
import "./profileleftbar.css"
import nelson from "../Images/nelson.png"
import nyc from "../Images/nyc.png"
import houston from "../Images/houston.png"
import chicago from "../Images/chicago.png"
import la from "../Images/la.png"
import atlanta from "../Images/atlanta.png"
import igwamang from "../Images/igwamang.png"
import woman from "../Images/woman.png"
import profileIcon from "../Images/profileIcon.png"

export default function ProfileLeftbar() {
  return (
    <div className='ProfileLeftbar'>
        <div className='NotificationsContainer'>
            <img src={`${igwamang}`} className="profilepageCover" alt=""/> 
            <div style={{display: 'flex', alignItems: 'center', marginTop:-25 }}>
                <img src={`${woman}`} className="profilepageimg" alt=""/> 
                <div>
                  <p style={{ color: "#f6f2ef", marginLeft:6, marginTop:20, textAlign:'start' }}>NK</p>
                  <p style={{ color: "#f6f2ef", marginLeft:6, marginTop:20, textAlign: 'start', marginTop:-16, fontSize:11 }}>Software Engineer</p>
                </div>
                <div>
                 <p style={{ color: "#f6f2ef", marginLeft:6, marginTop:20, textAlign:'start' }}>Following</p>
                  <p style={{ color: "#f6f2ef", marginLeft:6, marginTop:20, textAlign: 'start', marginTop:-16, fontSize:11 }}>5678</p>
                 </div>
                 <div>
                 <p style={{ color: "#f6f2ef", marginLeft:6, marginTop:20, textAlign:'start' }}>Followers</p>
                  <p style={{ color: "#f6f2ef", marginLeft:6, marginTop:20, textAlign: 'start', marginTop:-16, fontSize:11 }}>400</p>
                 </div>
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
