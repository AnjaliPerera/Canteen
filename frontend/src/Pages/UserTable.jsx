// CustomerTable.jsx
import React from 'react';
import './UserTable.css';

const users = [
    { name: "Jane Cooper", id: "SC/2020/0001", phone: "(225) 555-0118", email: "jane@microsoft.com", type: "Student" },
    { name: "Floyd Miles", id: "SC/2020/0002", phone: "(205) 555-0100", email: "floyd@yahoo.com", type: "Student" },
    { name: "Jane Cooper", id: "SC/2020/0003", phone: "(225) 555-0118", email: "jane@microsoft.com", type: "Student" },
    { name: "Floyd Miles", id: "SC/2020/0004", phone: "(205) 555-0100", email: "floyd@yahoo.com", type: "Student" },
    // Add more customer data as needed
];

export default function UserTable() {
    return (
        <div className="user-table-container">
            <div className="user-table">
                <h3>All Users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Id</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Type</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
