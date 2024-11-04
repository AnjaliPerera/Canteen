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
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    setErrorMessage(''); // Clear previous errors

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8080/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const token = response.data.jwt;
      console.log('Token:', token);

      // Decode the JWT token to extract the user's role
      let decodedToken;
      try {
        decodedToken = JSON.parse(atob(token.split('.')[1]));
      } catch (decodeError) {
        console.error('Token decoding failed:', decodeError);
        setErrorMessage('Invalid token received. Please try logging in again.');
        setIsLoading(false);
        return;
      }

      const role = decodedToken.role;
      console.log('Role:', role);

      // Store token, role, and email in either localStorage or sessionStorage based on the 'rememberMe' checkbox
      const storage = formData.rememberMe ? localStorage : sessionStorage;
      storage.setItem('token', token);
      storage.setItem('role', role);
      storage.setItem('email', formData.email); // Store email if needed for other components

      // Navigate based on the user's role
      navigate(role === 'OWNER' ? '/dashboard' : '/home');
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect email or password.');
      } else {
        setErrorMessage('Login failed. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

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

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Log In'}
        </button>
      </form>

      <div className="signup-option">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default LogIn;
