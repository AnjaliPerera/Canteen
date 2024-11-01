import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarA.css';

const SidebarA = () => {
    return (
        <div className="sidebar">
            <div>
                <img src="/logo.jpg" alt="Logo" className="logo" />
            </div>
            <ul className="menu">
                
                <li><Link to="/">User Table</Link></li>
                <li><Link to="/add-user">Add User</Link></li> {/* Link to AddUser component */}
            </ul>
        </div>
    );
};

export default SidebarA;
