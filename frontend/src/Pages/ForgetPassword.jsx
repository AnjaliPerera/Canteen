import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here (e.g., send email to backend)
    console.log('Email submitted for password reset:', email);
    setMessage('If the email exists in our system, a reset link will be sent.');
  };

  return (
    <div className="forget-password-container">
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Reset Link</button>

        {message && <p className="message">{message}</p>}
      </form>

      <div className="back-to-login">
        Remembered your password? <a href="/">Log In</a>
      </div>
    </div>
  );
};

export default ForgetPassword;
