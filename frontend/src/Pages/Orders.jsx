import React from 'react';
import OrderCard from './OrderCard';
import './Orders.css';

const sampleOrders = [
  {
    id: 1,
    date: '2024-11-03',
    time: '12:30 PM',
    items: [
      { name: 'Dhal Curry and Bread', price: 120, qty: 1 },
      { name: 'Boiled Egg', price: 30, qty: 2 },
    ],
    status: 'pending',
  },
  {
    id: 2,
    date: '2024-11-03',
    time: '1:00 PM',
    items: [
      { name: 'Rice and Curry', price: 150, qty: 1 },
    ],
    status: 'completed',
  },
  // Add more orders as needed
];

const Orders = () => {
  const handleAccept = (orderId) => {
    console.log(`Accepted order ${orderId}`);
    // Add additional logic to handle acceptance
  };

  const handleReject = (orderId) => {
    console.log(`Rejected order ${orderId}`);
    // Add additional logic to handle rejection
  };

  return (
    <div className="orders-dashboard">
      <h2>Orders</h2>
      <div className="orders-list">
        {sampleOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
