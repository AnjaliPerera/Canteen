import React from 'react';
import OrderCard from '../OrderCard/OrderCard'; // Corrected path
import './Content.css';

function Content() {
  const orders = [
  {
    id: 1,
    date: '2024-10-30',
    time: '12:30 PM',
    items: [
      { name: 'Burger', price: 450, qty: 2 },
      { name: 'Fries', price: 150, qty: 1 },
    ],
    status: 'pending',
  },
  {
    id: 2,
    date: '2024-10-30',
    time: '01:00 PM',
    items: [
      { name: 'Pizza', price: 1200, qty: 1 },
      { name: 'Soda', price: 100, qty: 1 },
    ],
    status: 'accepted',
  },
  {
    id: 3,
    date: '2024-10-30',
    time: '01:30 PM',
    items: [
      { name: 'Salad', price: 300, qty: 1 },
    ],
    status: 'rejected',
  },
];

  return (
    <div className="content-list">
      <h2>1st Time Slot (07:00 a.m - 07:30 a.m)</h2>
      <div className="order-cards">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
      <h2>2nd Time Slot (07:00 a.m - 07:30 a.m)</h2>
      <div className="order-cards">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Content;
