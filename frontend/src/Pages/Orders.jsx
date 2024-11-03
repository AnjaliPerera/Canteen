import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');

      if (!token) {
        setError('No token found. Please log in again.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleAccept = async (orderId) => {
    console.log(`Accepted order ${orderId}`);
    // Implement backend API call for accepting the order if needed
    // await axios.post(`http://localhost:8080/api/orders/${orderId}/accept`);
  };

  const handleReject = async (orderId) => {
    console.log(`Rejected order ${orderId}`);
    // Implement backend API call for rejecting the order if needed
    // await axios.post(`http://localhost:8080/api/orders/${orderId}/reject`);
  };

  if (isLoading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p>Error loading orders: {error}</p>;
  }

  return (
    <div className="orders-dashboard">
      <h2>Orders</h2>
      <div className="orders-list">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderCard
              key={order.orderId} // Use orderId as the key
              order={order}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
