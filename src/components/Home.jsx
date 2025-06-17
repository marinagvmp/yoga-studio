import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import YogaHome from '../YogaHome.png';

export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${YogaHome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Bend Yoga</h1>
        <Link to="/classes" className="cta-button">
          Click Here To Discover Our Classes, Beginner Or Pro Yogi
        </Link>
      </div>
    </div>
  );
}
