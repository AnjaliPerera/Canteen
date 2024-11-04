import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import OrderCardy from './OrderCardy'; // Importing OrderCardy component
import "./Order.css";

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve passed order details from location.state
  const { orderNumber, items, totalPrice, pickupTime, orderStatus = 'PENDING' } = location.state || {};

  if (!orderNumber || !items) {
    // Redirect to home if no order details are found
    navigate("/home");
    return null;
  }

  const handleDeleteOrder = (orderId) => {
    alert(`Order ${orderId} has been deleted.`);
    // Logic for deleting the order can be added here
    navigate('/menu'); // Redirect to menu or another page if needed
  };

  const handlePendingOrder = (orderId) => {
    alert(`Order ${orderId} status set to Pending.`);
    // Logic for setting the order status to pending can be added here
  };

  return (
    <>
      <Header />
      <div className="order-container">
        <div className="profile-section">
          <h3 className="profile-title">Your Order Details</h3>
          <div className="grid-container">
            {/* Display the order details in a single OrderCardy */}
            <OrderCardy
              order={{
                orderId: orderNumber,
                items: items,
                status: orderStatus,
                totalPrice: totalPrice, // Passing totalPrice to OrderCardy
                pickupTime: pickupTime  // Passing pickupTime to OrderCardy
              }}
              onDelete={handleDeleteOrder}
              onPending={handlePendingOrder}
            />

            <div className="cancel-button-container">
              <button className="cancel-order-button" onClick={() => navigate('/menu')}>
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
