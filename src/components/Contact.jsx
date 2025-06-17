import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2><span>Get in </span><strong>Touch</strong></h2>
      <p className="contact-subtext">
        Please fill out the form below, or feel free to call or email us directly
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone number" required />
        <select required>
          <option value="">Type Question Here:</option>
          <option value="classes">Questions about classes</option>
          <option value="pricing">Questions about pricing</option>
          <option value="schedule">Questions about schedule</option>
        </select>
        <button type="submit">SEND</button>
      </form>
      <div className="contact-boxes">
        <div className="contact-box">
          <span className="contact-label">📞 PHONE</span>
          <p className="contact-value">613-999-9999</p>
        </div>
        <div className="contact-box">
          <span className="contact-label">✉️ EMAIL</span>
          <p className="contact-value">info@bendyoga.ca</p>
        </div>
      </div>
    </div>
  );
}
