import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');

        if (!token) {
          setError('No token found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCustomers(response.data);
      } catch (err) {
        console.error('Error fetching customers:', err);
        setError('Failed to fetch customers');
      }
    };

    fetchCustomers();
  }, []);

  if (error) {
    return <p>Error loading customers: {error}</p>;
  }

  return (
    <div>
      <h3>Customer List</h3>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.userId || "N/A"}</td>
              <td>{customer.email}</td>
              <td>{customer.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
