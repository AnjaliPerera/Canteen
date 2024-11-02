import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (!isMobile) setIsOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    return (
        <>
            {isMobile && <button className="hamburger" onClick={toggleSidebar}>☰</button>}
            <div className={`sidebar ${isOpen || !isMobile ? 'open' : ''}`}>
                <div>
                    <img src="/logo.jpg" alt="Logo" className="logo" />
                </div>
                <ul className="menu">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/add-product">Add Product</Link></li>
                    <li><Link to="/dashboard/order-list">Order List</Link></li>
                    <li><Link to="/dashboard/food-edit">Food Edit</Link></li>
                    {/* More links as needed */}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
