import React from 'react';
import './OrderCard.css';

function OrderCard({ order, onAccept, onReject }) {
  return (
    <div className="order-card">
      <h3>Order ID: {order.orderId}</h3> {/* Display orderId */}

      <div className="order-items">
        {order.items?.map((item, index) => (
          <div key={index} className="order-item">
            <span>{item.name}</span>
            <span>LKR {item.price}.00</span>
            <span>Qty: {item.quantity}</span> {/* Updated to use item.quantity */}
          </div>
        )) || <p>No items available.</p>}
      </div>
      <div className="order-status">
        Status: <strong>{order.status?.toUpperCase() || 'PENDING'}</strong>
      </div>
      <div className="order-actions">
        <button className="reject-btn" onClick={() => onReject(order.orderId)}>Reject</button>
        <button className="accept-btn" onClick={() => onAccept(order.orderId)}>Accept</button>
      </div>
    </div>
  );
}

export default OrderCard;
