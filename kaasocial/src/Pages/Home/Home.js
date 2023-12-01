import React from 'react'
import Leftbar from '../../Components/LeftsideContainer/Leftbar'
import MainPost from '../../Components/MainPostContainer/MainPost'
import Navbar from '../../Components/Navbar/Navbar'
import Rightbar from '../../Components/RightsideContainer/Rightbar'
import "./home.css"
export default function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <div className="ComponentContainer">
                <Leftbar/>
                <MainPost/>
                <Rightbar/>
            </div>
        </div>
    )
}