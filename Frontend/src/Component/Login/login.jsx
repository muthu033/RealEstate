import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FormContainer = ({ isActive }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const history = useHistory();

  // Handle the signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {

      if (email === 'admin@gmail.com' && password === 'admin') {
        // Store admin details in localStorage
        localStorage.setItem('adminEmail', email);
        localStorage.setItem('adminLoggedIn', true);
  
        // Redirect to the admin panel
        history.push('/admin-panel');
        return;
      } 

      const response = await axios.post('http://localhost:5003/api/register', {
        name,
        email,
        password,
        role,
      });
      setMessage(response.data.message || 'User registered successfully!');
    } catch (error) {
      setMessage('Error during signup. Please try again.');
      console.error(error);
    }
  };

  // Handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      if (email === 'admin@gmail.com' && password === 'admin') {
        // Store admin details in localStorage
        localStorage.setItem('adminEmail', email);
        localStorage.setItem('adminLoggedIn', true);
  
        // Redirect to the admin panel
        history.push('/adminpanel');
        return;
      }
      
      const response = await axios.post('http://localhost:5003/api/login', {
        email,
        password,
      });
  
      const data = response.data;
  
      console.log('API Response:', data); // Debugging API response
  
      if (data.token) {
        // Save token and role to localStorage
        localStorage.setItem('token', data.token);
        if (data.role) {
          localStorage.setItem('role', data.role);
          console.log('Token:', data.token, 'Role:', data.role);
        } else {
          console.warn('Role is missing in the response.');
        }
  
        // Redirect to the home page
        history.push('/');
      } else {
        setMessage('Invalid email or password');
      }
    } catch (error) {
      setMessage('Error during login. Please check your credentials.');
      console.error('Login error:', error);
    }
  };
  

  // Handle OTP request for forgot password
  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5003/api/forgot-password', { email });
      setOtpSent(true);
      setMessage(response.data.message || 'OTP sent to your email.');
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
      console.error(error);
    }
  };

  // Verify OTP entered by the user
  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5003/api/verifyOtp', { email, otp });
      if (response.data.success) {
        setIsOtpVerified(true);
        setMessage('OTP verified successfully.');
      } else {
        setMessage(response.data.message || 'Invalid OTP. Try again.');
      }
    } catch (error) {
      setMessage('Error verifying OTP.');
      console.error(error);
    }
  };

  // Reset password after OTP verification
  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5003/api/reset-password', { email, newPassword });
      setMessage(response.data.message || 'Password reset successful.');
      setIsForgotPassword(false); // Go back to login
      setOtpSent(false);
      setIsOtpVerified(false);
    } catch (error) {
      setMessage('Error resetting password.');
      console.error(error);
    }
  };

  return (
    <>
      {!isForgotPassword ? (
        <div className={`signup-form-container ${isActive ? 'signup-sign-up signup-active' : 'signup-sign-in'}`}>
          <form onSubmit={isActive ? handleSignup : handleLogin}>
            <h1>{isActive ? 'Create Account' : 'Sign In'}</h1>
            <div className="signup-social-icons">
            <a href="#" className="signup-icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="signup-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="signup-icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="signup-icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
            <span style={{fontSize:"15px"}}>{isActive ? 'or use your email for registration' : 'or use your email and password'}</span>

            {isActive && (
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {isActive ? (
              <>
                <select className='lop' name="role" onChange={(e) => setRole(e.target.value)}>
                  <option value="User">User</option>
                  <option value="Agent">Agent</option>
                </select>
                <input 
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
              </>
            ) : (
              <>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#" onClick={() => setIsForgotPassword(true)}>Forgot Your Password?</a>
                <button type="submit">Sign In</button>
              </>
            )}
            <p>{message}</p>
          </form>
        </div>
      ) : (
        <div className="forgot-password-form">
          {isOtpVerified ? (
            <>
              <h2>Reset Password</h2>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={handleResetPassword}>Reset Password</button>
            </>
          ) : otpSent ? (
            <>
              <h2>Verify OTP</h2>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={handleVerifyOtp}>Verify OTP</button>
            </>
          ) : (
            <>
              <h2>Forgot Password</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSendOtp}>Send OTP</button>
            </>
          )}
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default FormContainer;
