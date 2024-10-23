import React, { useState } from 'react';
import axios from 'axios';
import './LogIn.css';  // Assuming you have your CSS file for styling
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const LogIn = () => {
  const [formData, setFormData] = useState({
    userId: '',   // Added userId to the state
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();  // Initialize useNavigate for redirection

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending login request to the backend with email, userId, and password
      const response = await axios.post('http://localhost:8080/auth/login', {
        userId: formData.userId,  // Sending userId if required by the backend
        email: formData.email,
        password: formData.password,
      });

      const token = response.data.jwt;  // Assuming the JWT token is returned as plain text
      console.log('Token:', token);

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Redirect to Extra Curry Selection page
      alert('Login successful!');
      navigate('/extra-curry-selection');  // Redirect after login
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>

        {/* User ID input */}
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            name="userId"
            id="userId"
            placeholder="User ID"
            value={formData.userId}
            onChange={handleChange}
          />
        </div>

        {/* Email input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Remember Me checkbox */}
        <div className="form-group form-options">
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="remember-me-label">
              Remember Me
            </label>
          </div>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-btn">Log In</button>
      </form>

      <div className="signup-option">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default LogIn;
