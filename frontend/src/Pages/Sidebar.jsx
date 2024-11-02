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
                                <li><Link to="/">Dashboard</Link></li>
                                <li><Link to="add-product">Add Product</Link></li>
                                <li><Link to="order-list">Order List</Link></li>
                                <li><Link to="customer-table">Customer Table</Link></li>
                                <li><Link to="food-details">Food Details</Link></li>
                                <li><Link to="reviews">Reviews</Link></li>
                                <li><Link to="orders">Orders</Link></li>
                            </ul>
            </div>
        </>
    );
};

export default Sidebar;
