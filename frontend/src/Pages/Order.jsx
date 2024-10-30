import React from "react";
import img2 from "../assets/product-selected (1).png";
import img3 from "../assets/product-selected (2).png";
import img1 from "../assets/product-selected.png";
import welcomeImage from "../assets/Rectangle 8.png";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import "./Order.css";

export default function Order() {
  return (
    <>
      <Header />

      <div className="order-container">
        <div className="text-center">
          <img src={welcomeImage} alt="" className="welcome-image" />
          <h1 className="welcome-text">Welcome</h1>
          <button className="order-button">Order</button>
        </div>

        <div className="profile-section">
          <h3 className="profile-title">YOUR PROFILE</h3>
          <div className="grid-container">
            <div>
              <div className="order-details">
                <p className="order-no">Order No:</p>
                <p className="order-no-value">L312</p>
              </div>
              <div className="space-y-6 mt-6">
                {[
                  { img: img1, name: "Rice and Curry (VEG)", price: "LKR 100", qty: 1 },
                  { img: img2, name: "Chicken Portion", price: "LKR 80", qty: 1 },
                  { img: img3, name: "Boiled Egg", price: "LKR 70", qty: 2 },
                ].map((item, index) => (
                  <div key={index} className="product-item">
                    <div className="flex items-center">
                      <img src={item.img} alt={item.name} className="product-image" />
                      <div className="product-details">
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">{item.price}</p>
                      </div>
                    </div>
                    <div className="quantity-section">
                      <p className="quantity-label">Quantity</p>
                      <p className="quantity-value">{item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <button className="cancel-order-button">Cancel Order</button>
              </div>
            </div>
            <div>
              <h3 className="conditions-title">CONDITIONS</h3>
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