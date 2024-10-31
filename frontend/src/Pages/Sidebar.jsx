import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
            <img src="/logo.jpg" alt="Logo" className='logo'/>
            </div>
            <ul className="menu">
                <li>Dashboard</li>
                <li className="active">Order List</li>
                <li>Order Detail</li>
                <li>Customer</li>
                <li>Analytics</li>
                <li>Reviews</li>
                <li>Foods</li>
                <li>Food Detail</li>
            </ul>
        </div>
    );
};

export default Sidebar;
