import React from 'react';
import './OrderCardy.css';

function OrderCardy({ order, onDelete, onPending }) {
  const { orderId, items, status } = order;
  const totalPrice = order.totalPrice || '0.00'; // Fallback if totalPrice is not available
  const pickupTime = order.pickupTime || 'N/A'; // Fallback if pickupTime is not available

  return (
    <div className="order-cardy">
      <h3>Order ID: {orderId}</h3> {/* Display orderId */}

      <div className="order-items">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.name}</span>
              <span>LKR {item.price.toFixed(2)}</span>
              <span>Qty: {item.quantity}</span>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>

      <div className="order-status">
        Status: <strong>{status?.toUpperCase() || 'PENDING'}</strong>
      </div>

      <div className="order-summary">
        <p><strong>Total Price:</strong> LKR {parseFloat(totalPrice).toFixed(2)}</p>
        <p><strong>Pickup Time:</strong> {pickupTime}</p>
      </div>

      <div className="order-actions">
        <button className="delete-btn" onClick={() => onDelete(orderId)}>Delete</button>
        <button className="pending-btn" onClick={() => onPending(orderId)}>Pending</button>
      </div>
    </div>
  );
}

export default OrderCardy;
