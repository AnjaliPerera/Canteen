// CustomerTable.jsx
import React from 'react';
import './CustomerTable.css';

const customers = [
    { name: "Jane Cooper", id: "SC/2020/0001", phone: "(225) 555-0118", email: "jane@microsoft.com", type: "Student" },
    { name: "Floyd Miles", id: "SC/2020/0002", phone: "(205) 555-0100", email: "floyd@yahoo.com", type: "Student" },
    // Add more customer data as needed
];

export default function CustomerTable() {
    return (
        <div className="customer-table-container">
            <div className="customer-table">
                <h3>All Customers</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Id</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.id}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>{customer.type}</td>
                                <td><button className="view-history">View History</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
