import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import './SignUp.css';  // Assuming you have the CSS already

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    email: '',
    password: '',
    confirmPassword: '',

    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare the user object to send to the backend
    const user = {
      name: formData.name,
      userId: formData.userId,
      email: formData.email,
      password: formData.password,
      otp: formData.otp
    };

    try {
      // Send a POST request using Axios to the /auth/signup endpoint
      const response = await axios.post('http://localhost:8080/auth/signup', user);

      if (response.status === 201) {
        // Handle successful registration
        alert('Registration successful!');
      } else {
        // Handle failed registration
        alert('Registration failed: ' + response.data);
      }
    } catch (error) {
      // Catch and handle any error that occurs during the request
      console.error('Error during registration:', error.message);
      alert('An error occurred during registration.');
    }

    console.log('Form data submitted:', formData);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create a new Account</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          name="userId"
          id="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />

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

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />


        <button type="submit">Submit</button>

      </form>

      <div className="login-option">
        Already a member? <a href="/">Log In</a>
      </div>
    </div>
  );
};

export default SignUp;
