import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Prices from './components/Prices';
import Calendar from './components/Calendar';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Classes from './components/Classes';

function App() {
  return (
    <Router>
      <header className="custom-navbar">
        <Link to="/">
          <img src="/Logo.png" alt="Logo" className="custom-logo" />
        </Link>
        <nav className="custom-links">
          <NavLink to="/" end className="nav-item">Home</NavLink>
          <NavLink to="/classes" className="nav-item">Classes</NavLink>
          <NavLink to="/calendar" className="nav-item">Schedule</NavLink>
          <NavLink to="/prices" className="nav-item">Pricing</NavLink>
          <NavLink to="/contact" className="nav-item">Contact</NavLink>
        </nav>
        <button className="sign-in-btn">Sign In</button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="social-footer">
        <button className="social-button" onClick={() => alert('Opening Instagram...')}>
         <img src="/insta.PNG" alt="Instagram" className="social-icon" />
        </button>
        <button className="social-button" onClick={() => alert('Opening Facebook...')}>
          <img src="/facebook.PNG" alt="Facebook" className="social-icon" />
        </button>
        <button className="social-button" onClick={() => alert('Opening TikTok...')}>
          <img src="/tiktok.PNG" alt="TikTok" className="social-icon" />
        </button>
        <button className="social-button" onClick={() => alert('Opening X...')}>
          <img src="/x.PNG" alt="X" className="social-icon" />
        </button>
      </footer>
      
    </Router>
  );
}

export default App;
