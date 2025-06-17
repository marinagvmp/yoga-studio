import React from 'react';
import './Prices.css';

export default function Prices() {
  return (
    <div className="prices-container">
      <h2>Pricing</h2>
      <div className="price-cards">
        <div className="price-card">
          <h3>$60</h3>
          <p className="price-title">New Members</p>
          <p className="price-desc">
            30 day trial for those who are new to yoga. Come discover your zen.
          </p>
        </div>

        <div className="price-card">
          <h3>$90</h3>
          <p className="price-title">Morning Pass</p>
          <p className="price-desc">
            Valid for the first class of the day, every day. For all the morning people out there.
          </p>
        </div>

        <div className="price-card">
          <h3>$150</h3>
          <p className="price-title">All-Access Pass</p>
          <p className="price-desc">
            As many sessions as you want, whenever you want. Take your practice to the next level.
          </p>
        </div>
      </div>

      <p className="student-note">Students get 15% off all of our prices</p>
    </div>
  );
}