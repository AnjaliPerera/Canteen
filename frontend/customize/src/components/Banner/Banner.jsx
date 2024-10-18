import React from 'react';
import './Banner.css';

function Banner() {
    return (
      <div className="banner">
        <img src="Banner.jpg" alt="Food Banner" />
        <div className="welcome-text">
          <button className="customize-btn">Customization</button>
          <h1>WELCOME</h1>
        </div>
      </div>
    );
  }
  
export default Banner
