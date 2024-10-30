// Components/OrderCard/OrderCard.jsx
import React from 'react';
import './OrderCard.css';

function OrderCard({ order, onAccept, onReject }) {
  return (
    <div className="order-card">
      <h3>Order #{order.id}</h3>
      <p>Date: {order.date || 'N/A'} <br></br> Time: {order.time || 'N/A'}</p>
      <div className="order-items">
        {order.items?.map((item, index) => (
          <div key={index} className="order-item">
            <span>{item.name}</span>
            <span>LKR {item.price}.00</span>
            <span>Qty: {item.qty}</span>
          </div>
        )) || <p>No items available.</p>}
      </div>
      <div className="order-status">
        Status: <strong>{order.status?.toUpperCase() || 'PENDING'}</strong>
      </div>
      <div className="order-actions">
        <button className="reject-btn" onClick={() => onReject(order.id)}>Reject</button>
        <button className="accept-btn" onClick={() => onAccept(order.id)}>Accept</button>
      </div>
    </div>
  );
}

export default OrderCard;

