import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './Booking.css'; 


export default function Booking() {
  const location = useLocation();
  const classInfo = location.state?.classInfo;

  const handleSignIn = () => {
    alert('Redirecting to Sign In...');
  };

  const handleSignUp = () => {
    alert('Redirecting to Create Account...');
  };

  return (
    <div className="booking-container">
      <h2>Booking Page</h2>
      {classInfo ? (
        <>
          <p>You are booking: <strong>{classInfo}</strong></p>
          <p>Please sign in or create an account to continue.</p>
          <div className="booking-buttons">
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Create Account</button>
          </div>
        </>
      ) : (
        <p>No class selected. Please go back to the schedule and choose one.</p>
      )}
    </div>
  );
}
