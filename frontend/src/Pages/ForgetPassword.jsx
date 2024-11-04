import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here (e.g., send email and OTP to backend)
    console.log('Email and OTP submitted for password reset:', email, otp);
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
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="otp">OTP</label>
        <input
          type="text"
          name="otp"
          id="otp"
          placeholder="Enter your OTP"
          value={otp}
          onChange={handleOtpChange}
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
