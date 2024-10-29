import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import './Header.css'; // Import the external CSS file

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleBackButtonClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <div className="logo-text">
          <h1>The best delicious food that meets your needs</h1>
          <p></p>
        </div>
      </div>

      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Extra Curry</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          
        </ul>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search meals..." />
        <button><i className="fa fa-search"></i></button>
      </div>

      <button className="back-button" onClick={handleBackButtonClick}>
        <i className="fa fa-arrow-left"></i>
      </button>

      {/* Sidebar toggle button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </button>

      {/* Sidebar for small screens */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Extra Curry</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;