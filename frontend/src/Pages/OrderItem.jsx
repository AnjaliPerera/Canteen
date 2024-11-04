import React from 'react';
import './OrderItem.css';

const OrderItem = ({ order }) => {
    return (
        <div className="order-item">
            <img
                src={`/images/${order.image}`} // Dynamically add the image path
                alt={order.name}
            />
            <div className="order-details">
                <span>{order.name}</span>

            </div>

            <div className="order-quantity">

                <span>{order.quantity}</span>
            </div>
        </div>
    );
};

export default OrderItem;
