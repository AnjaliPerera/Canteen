import React, { useState } from 'react';
import axios from 'axios';
import './LogIn.css';  // Assuming you have your CSS file for styling

const LogIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    email: '',
    password: '',
    rememberMe: false,
  });

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
      // Sending login request to the backend with email and password
      const response = await axios.post('http://localhost:8080/auth/login', {
        email: formData.email,  // Or you can use username or userId if needed
        password: formData.password,
      });

      const token = response.data.jwt;  // Assuming the JWT token is returned as plain text
      console.log('Token:', token);

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Optionally, redirect to a different page or show a success message
      alert('Login successful!');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>

        {/* Name input */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* User ID input */}
        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          name="userId"
          id="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
        />

        {/* Email input */}
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

        {/* Password input */}
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

        {/* Remember Me checkbox */}
        <div className="form-options">
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
        <button type="submit">Log In</button>
      </form>

      <div className="signup-option">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default LogIn;
