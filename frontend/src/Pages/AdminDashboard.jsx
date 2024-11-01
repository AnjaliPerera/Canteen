import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddUser from './AddUser';
import './App.css';
import SidebarA from './SidebarA';
import UserTable from './UserTable';

export default function AdminDashboard() {
    return (
        <Router>
            <div className="app">
                <SidebarA />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<UserTable />} />
                        <Route path="/add-user" element={<AddUser />} /> {/* Corrected the route path for AddUser */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
