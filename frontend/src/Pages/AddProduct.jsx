import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [mealName, setMealName] = useState('');
  const [price, setPrice] = useState('');
  const [foodType, setFoodType] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mealName || !price || !foodType) {
      alert('Please fill out all fields!');
      return;
    }

    console.log({ mealName, price, foodType });

    // clear the form fields after submission
    setMealName('');
    setPrice('');
    setFoodType('');
  };

  return (
    <div className="add-product-container">
      <div className="sidebar">
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
        </div>
        <ul className="menu">
            <li>Dashboard</li>
            <li>Order List</li>
            <li>Order Detail</li>
            <li>Customer</li>
            <li>Analytics</li>
            <li>Reviews</li>
            <li>Foods</li>
            <li className="active">Food Edit</li>
          
        </ul>
      </div>

      <div className="form-section">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="image-upload">
            <label htmlFor="file-input">
              <img src="/icon.jpg" alt="Upload" />
            </label>
            <input id="file-input" type="file" style={{ display: 'none' }} />
            <p>Upload Photo</p>
          </div>

          <div className="form-group">
            <label>Meal Name</label>
            <input
              type="text"
              placeholder="Enter meal name"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              placeholder="LKR"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Food Type</label>
            <select
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Extra Curry">Extra Curry</option>
              <option value="Short Eats">Short Eats</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Add Now</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
