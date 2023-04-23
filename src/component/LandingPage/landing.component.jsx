import React from 'react'
import Landingimage from "./assets/landing1.png";
import "./landing.styles.css";

const Landing = () => {
  return (
    <div className='JoinPage'>
        <div className="subcontainer">
        <div className='roomcontainer'>
            <h1 className='header'>Join with your Friends</h1>
            <input type="text" placeholder='Paste link' className='joininput'/>
            <button className='jnbtn'>Join Room</button>
            <h1 className='ortext'>OR</h1>
            <button className='jnbtn'>Create Room</button>
            <p className='demotxt'>Open the app, choose the contact, click on video call, wait for connection, enjoy the conversation!</p>
        </div>
        <div className='imgUrl'>
           <img src={Landingimage} alt="none" width={'100%'}/>
        </div>
        </div>
    </div>
  )
}

export default Landing