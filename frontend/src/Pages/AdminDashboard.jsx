import React from 'react';
import SidebarA from './SidebarA';
import UserTable from './UserTable';
import './AdminDashboard.css';

export default function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <SidebarA />
            <UserTable />
        </div>
    );
}
