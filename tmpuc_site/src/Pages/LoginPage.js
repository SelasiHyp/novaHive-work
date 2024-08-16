import React from "react";
import "../Styles/LoginPage.css";
import { useNavigate } from 'react-router-dom';

function LoginPage(){

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/ApplicationFormPage'); // Navigate to the dashboard page
  };

  return(
    <>
    <div className="page-background">
      <div className="image-section">
        <img className="graduation-image" src='images/Rectangle 85.png' alt="graduates" />
        <div className="image-text-overlay">
          <h2 className="welcome-text">Welcome to <br/>TM Pre-University College<br/></h2>
          <p className="welcome-message">
            Let's get you all set up so you can verify 
            your personal account and begin setting up your profile
          </p>
        </div>
        
      </div>

      <div className="login-section">
        <div className="login-container">
        <p className="login-title">Log In</p>
        <p className="login-instruction">Enter your email and password to login to your account</p>
        <input className="login-field" type="email" placeholder="Student's Mail" />
        <input className="login-field" type="password" placeholder="Password" />
        <button onClick={handleLoginClick} className="signIn-button" > Sign in</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;