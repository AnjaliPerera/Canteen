import React from 'react';
import './DashboardHome.css';

const DashboardHome = () => {
    // Placeholder data - replace with dynamic data if available
    const data = {
        totalOrders: 120,
        pendingOrders: 10,
        completedOrders: 100,
        totalCustomers: 85,
        totalReviews: 40,
        availableItems: 30,
    };

    return (
        <div className="dashboard-home">
            <h2>Dashboard Overview</h2>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total Orders</h3>
                    <p>{data.totalOrders}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Pending Orders</h3>
                    <p>{data.pendingOrders}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Completed Orders</h3>
                    <p>{data.completedOrders}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Total Customers</h3>
                    <p>{data.totalCustomers}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Total Reviews</h3>
                    <p>{data.totalReviews}</p>
                </div>
                <div className="dashboard-card">
                    <h3>Available Items</h3>
                    <p>{data.availableItems}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
