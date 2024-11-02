import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddProduct from './AddProduct';
import './OwnerDashboard.css';

const OwnerDashboard = () => {
    return (
        <div className="owner-dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <Routes>
                    <Route path="add-product" element={<AddProduct />} />
                    {/* Add more routes here as needed */}
                </Routes>
            </div>
        </div>
    );
};

export default OwnerDashboard;
