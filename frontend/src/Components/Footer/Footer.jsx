import React from 'react';
import './Footer.css'; // Import the external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Rome</h4>
          <p>Rome canteen serves fresh, healthy meals on campus, with dishes for every taste and dietary need.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: rome@gmail.com</p>
          <p>Phone: +94 761502002</p>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Monday - Friday : 7.00 AM - 4.00 PM</p>
          <p>Saturday - Sunday : 8.00 AM - 4.00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Rome - Science Faculty Canteen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
