import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import "./Order.css";

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve passed order details from location.state
  const { orderNumber, items, totalPrice, pickupTime } = location.state || {};

  if (!orderNumber || !items) {
    // Redirect to home if no order details are found
    navigate("/home");
    return null;
  }

  const handleCancelOrder = () => {
    alert("Order canceled successfully.");
    navigate('/menu');
  };

  return (
    <>
      <Header />
      <div className="order-container">
        <div className="profile-section">
          <h3 className="profile-title">Your Order</h3>
          <div className="grid-container">
            <div>
              <div className="order-details">
                <p className="order-no">Order No:</p>
                <p className="order-no-value">{orderNumber}</p>
              </div>

              <div className="space-y-6 mt-6">
                {items.map((item, index) => (
                  <div key={index} className="product-item">
                    <div className="flex items-center">
                      <img
                        src={item.imageUrl || 'placeholder_image_url_here'}
                        alt={item.name}
                        className="product-image"
                      />
                      <div className="product-details">
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">LKR {item.price}</p>
                      </div>
                    </div>
                    <div className="quantity-section">
                      <p className="quantity-label">Quantity</p>
                      <p className="quantity-value">{item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-summary">
                <p>Total Price: LKR {totalPrice}</p>
                <p>Pickup Time: {pickupTime}</p>
              </div>

              <div className="cancel-button-container">
                <button className="cancel-order-button" onClick={handleCancelOrder}>
                  Cancel Order
                </button>
              </div>
            </div>

            {/* Order conditions */}
          <div>
          <h3 className="conditions-title">Conditions</h3>
       <ul className="conditions-list">
      <li>You may cancel your order within 30 minutes of placing it. After this period, cancellations will not be accepted.</li>
       <li>Orders can be collected at the university canteen premises. Payment upon collection can be made in cash.</li>
      <li>If your order is not collected within the selected time slot, it will be automatically canceled after 30 minutes.</li>
                                                            <li>Once your order has been collected, you will receive a pop-up message on our website requesting you to rate our service. We appreciate and welcome your feedback.</li>
                                                          </ul>
                                                        </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
