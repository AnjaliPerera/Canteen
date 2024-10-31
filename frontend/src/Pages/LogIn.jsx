import React, { useState } from 'react';
import axios from 'axios';
import './LogIn.css';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const token = response.data.jwt;
      console.log('Token:', token);

      // Decode JWT to retrieve email and role, and check expiration
      let decodedToken;
      try {
        decodedToken = JSON.parse(atob(token.split('.')[1]));
      } catch (error) {
        console.error('Error decoding JWT:', error);
        setError('Invalid token received. Please try logging in again.');
        return;
      }

      const { email, role, exp } = decodedToken;
      const isExpired = exp * 1000 < Date.now();

      if (isExpired) {
        setError("Session expired. Please log in again.");
        return;
      }

      // Store token and role in either localStorage or sessionStorage based on rememberMe
      const storage = formData.rememberMe ? localStorage : sessionStorage;
      storage.setItem('token', token);
      storage.setItem('role', role);

      // Redirect based on the role
      if (role === 'OWNER') {
        navigate('/addProduct');
      } else {
        navigate('/menu');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'Login failed. Check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>

        {/* Display error message */}
        {error && <p className="error-message">{error}</p>}

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
