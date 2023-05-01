import React from 'react';
import screen from "./assets/olaaaa.png";
import logo from "./assets/logoapp.png";
import "./home.styles.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <Link to='/' className="logo">
        <img src={logo} alt="none" className='logoimg'/>
        <div className="logoname">SightCall</div>
      </Link>
      <div>
        <div className="text"></div>
        <div className="infoimg"></div>
      </div>
      <img src={screen} alt="none" width={'400px'} />
    </div>
  )
}

export default Home;