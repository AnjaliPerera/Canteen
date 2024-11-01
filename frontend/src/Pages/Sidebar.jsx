import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle window resize
    const handleResize = () => {
        const mobileView = window.innerWidth <= 768;
        setIsMobile(mobileView);
        if (!mobileView) {
            setIsOpen(false); // Close sidebar if the width is greater than 768px
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* Only show the hamburger button in mobile view */}
            {isMobile && (
                <button className="hamburger" onClick={toggleSidebar}>
                    ☰
                </button>
            )}
            {/* Always render sidebar, but its visibility is controlled */}
            <div className={`sidebar ${isOpen || !isMobile ? 'open' : ''}`}>
                <div>
                    <img src="/logo.jpg" alt="Logo" className="logo" />
                </div>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Order List</li>
                    <li>Order Details</li>
                    <li>Customer</li>
                    <li>Analytics</li>
                    <li>Reviews</li>
                    <li className="active">Foods</li>
                    <li>Food Edit</li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
