import React from "react";
import "./Styles/LoginPage.css";

function LoginPage(){
  return(
    <>
    <div className="page-background">
      <div className="image-section">
        <img className="graduation-image" src='/Rectangle 85.png' alt="graduates" />
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
        <input className="login-field" type="text" placeholder="Student's Mail" />
        <input className="login-field" type="text" placeholder="Password" />
        <button className="signIn-button"> Sign in</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;