import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [activeTab, setActiveTab] = useState('signIn');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="login-section">
        <div className="logo">
          <img src="/public/horse-galloping-black-silhouette-facing-left.png" alt="SmartSave logo" height="20px" width="20px" />
          SmartSave
        </div>
        <h1>Welcome Back</h1>
        <p className="subtitle">Welcome Back, Please enter Your details</p>
        <div className="form-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'signIn' ? 'active' : ''}`}
              onClick={() => handleTabChange('signIn')}
            >
              Sign In
            </button>
            <button
              className={`tab ${activeTab === 'signUp' ? 'active' : ''}`}
              onClick={() => handleTabChange('signUp')}
            >
              Sign Up
            </button>
          </div>
          {activeTab === 'signIn' ? <SignIn /> : <SignUp />}
        </div>
        <div className="or-continue">
          <span className="line"></span>
          Or Continue With
          <span className="line"></span>
        </div>
        <div className="social-buttons">
        <button class="social-btn google"><img src="/public/google.png" alt="google image-section" height="20px" width="20px"/></button>
                    <button class="social-btn apple"><img src="/public/apple-logo.png" alt="image-section" height="20px" width="20px"/></button>
                    <button class="social-btn facebook"><img src="/public/facebook.png" alt="image-section" height="20px" width="20px"/></button>
        </div>
        <p className="footer-text">
          Join the millions of smart investors who trust us to manage their finances.
          Log in to access your personalized dashboard, track your portfolio performance,
          and make informed investment decisions.
        </p>
      </div>
      <div className="image-section">
        <img src="/public/logo.jpg" alt="Safe Icon" />
      </div>
    </div>
  );
}

export default App;
