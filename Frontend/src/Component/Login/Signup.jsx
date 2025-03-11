import React, { useState } from 'react';
import FormContainer from './login';
import '../Login/login.css';


function Signup() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="signup-page">
      {/* Apply the 'signup-active' class to the 'signup-container' div */}
      <div className={`signup-container ${isActive ? 'signup-active' : ''}`}>
        <FormContainer isActive={isActive} />
        <div className="signup-toggle-container">
          <div className="signup-toggle">
            <div className="signup-toggle-panel signup-toggle-left">
              <h1>Welcome Back!</h1>
              <p className='text-white'>Enter your personal details to use all site features</p>
              <button className="signup-hidden" onClick={toggleActive}>
              Sign In
              </button>
            </div>
            <div className="signup-toggle-panel signup-toggle-right">
              <h1>Hello, Friend!</h1>
              <p className='text-white'>Register with your personal details to use all site features</p>
              <button className="signup-hidden" onClick={toggleActive}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;