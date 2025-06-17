import React from 'react';
import './Classes.css';
import Yin from '../Yin.png';
import Chair from '../Chair.png';
import PowerFlow from '../PowerFlow.png';

export default function Classes() {
  return (
    <div className="classes-container">
      <div className="class-card">
        <div className="image-wrapper">
          <img src={Yin} alt="Relaxing Yin" />
          <div className="overlay-text">A gentle, meditative practice focused on deep stretching and breath awareness.</div>
        </div>
        <p className="class-title">Relaxing Yin</p>
      </div>

      <div className="class-card">
        <div className="image-wrapper">
          <img src={Chair} alt="Chair Yoga" />
          <div className="overlay-text">Perfect for seniors or limited mobility. A safe and supported way to practice yoga.</div>
        </div>
        <p className="class-title">Chair Yoga</p>
      </div>

      <div className="class-card">
        <div className="image-wrapper">
          <img src={PowerFlow} alt="Power Flow" />
          <div className="overlay-text">A strong, active vinyasa-style class to build strength, stamina, and focus.</div>
        </div>
        <p className="class-title">Power Flow</p>
      </div>
    </div>
  );
}
