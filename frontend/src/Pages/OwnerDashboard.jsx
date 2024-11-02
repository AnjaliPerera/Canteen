import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome'
import AddProduct from './AddProduct';
import OrderList from './OrderList';
import CustomerTable from './CustomerTable'; // Import CustomerTable component
import FoodDetails from './FoodDetails';
import Reviews from './Reviews';
import Orders from './Orders';
import './OwnerDashboard.css';

const OwnerDashboard = () => {
    return (
        <div className="owner-dashboard">
            <Sidebar />
                        <div className="dashboard-content">
                            <Routes>
                                <Route path="/" element={<DashboardHome />} />
                                <Route path="add-product" element={<AddProduct />} />
                                <Route path="order-list" element={<OrderList mealType="Breakfast" />} />
                                <Route path="customer-table" element={<CustomerTable />} />
                                <Route path="food-details" element={<FoodDetails />} />
                                <Route path="reviews" element={<Reviews />} />
                                <Route path="orders" element={<Orders />} />
                            </Routes>
                        </div>
        </div>
    );
};

export default OwnerDashboard;
