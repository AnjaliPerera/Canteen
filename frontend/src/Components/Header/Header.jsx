import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBackButtonClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close sidebar on link click for better UX
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/menu" activeClassName="active">Menu</NavLink></li>
          <li><NavLink to="/foodselection" activeClassName="active">Extra Curry</NavLink></li>
          <li><NavLink to="/order" activeClassName="active">Order</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>
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
          <li><NavLink to="/home" activeClassName="active" onClick={closeSidebar}>Home</NavLink></li>
          <li><NavLink to="/menu" activeClassName="active" onClick={closeSidebar}>Menu</NavLink></li>
          <li><NavLink to="/foodselection" activeClassName="active" onClick={closeSidebar}>Extra Curry</NavLink></li>
          <li><NavLink to="/order" activeClassName="active" onClick={closeSidebar}>Order</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active" onClick={closeSidebar}>Contact</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" onClick={closeSidebar}>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
