<<<<<<< HEAD:tmpuc_site/src/LoginPage.js
import React, { useState } from "react";
import "./Styles/LoginPage.css";
=======
import React from "react";
import "../Styles/LoginPage.css";
>>>>>>> 254b25cdd71da69d3a12bba79dfc3aa06d910a32:tmpuc_site/src/Pages/LoginPage.js
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [pin, setVoucherPin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', { pin, password }); // Adjusted URL
        const { token } = response.data; // Destructure token from response data

        if (token) {
            localStorage.setItem('token', token); // Store token for authenticated routes
            navigate('/ApplicationFormPage'); // Navigate to the application form page
        } else {
            throw new Error('Token not received');
        }
    } catch (error) {
        console.error('Login failed', error);
        alert('Login failed. Please check your voucher pin and password.');
    }
};

  return (
    <>
<<<<<<< HEAD:tmpuc_site/src/LoginPage.js
      <div className="page-background">
        <div className="image-section">
          <img className="graduation-image" src='/Rectangle 85.png' alt="graduates" />
          <div className="image-text-overlay">
            <h2 className="welcome-text">Welcome to <br />TM Pre-University College<br /></h2>
            <p className="welcome-message">
              Let's get you all set up verify your Voucher and begin setting up your profile
            </p>
          </div>
=======
    <div className="page-background">
      <div className="image-section">
        <img className="graduation-image" src='images/Rectangle 85.png' alt="graduates" />
        <div className="image-text-overlay">
          <h2 className="welcome-text">Welcome to <br/>TM Pre-University College<br/></h2>
          <p className="welcome-message">
            Let's get you all set up so you can verify 
            your personal account and begin setting up your profile
          </p>
>>>>>>> 254b25cdd71da69d3a12bba79dfc3aa06d910a32:tmpuc_site/src/Pages/LoginPage.js
        </div>

        <div className="login-section">
          <div className="login-container">
            <p className="login-title">Apply now</p>
            <p className="login-instruction">Enter your Voucher Pin and Password to apply</p>
            <input
              className="login-field"
              type="text"
              placeholder="Voucher pin"
              value={pin}
              onChange={(e) => setVoucherPin(e.target.value)}
            />
            <input
              className="login-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginClick} className="signIn-button"> Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
