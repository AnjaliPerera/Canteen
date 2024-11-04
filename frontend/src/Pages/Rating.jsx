import React, { useState } from 'react';
import './Rating.css';

const Rating = () => {
  const starsTotal = 5;

  // State to manage selected product, rating input, and an array of food items
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [foodItems, setFoodItems] = useState([
    { id: 'sanwich', name: 'Sanwich', rating: 0 },
    { id: 'burger', name: 'Cheese Burger', rating: 0 },
    { id: 'pasta', name: 'Pasta Primavera', rating: 0 },
    { id: 'pizza', name: 'Pepperoni Pizza', rating: 0 },
  ]);

  // Handler for product selection
  const handleProductSelect = (event) => {
    const selectedProductId = event.target.value;
    setSelectedProduct(selectedProductId);
    const selectedFoodItem = foodItems.find((item) => item.id === selectedProductId);
    setRating(selectedFoodItem ? selectedFoodItem.rating : 0);
  };

  // Handler for rating input
  const handleRatingChange = (event) => {
    const newRating = Math.min(event.target.value, starsTotal); // Limit rating to max of 5
    setRating(newRating);

    // Update the rating in the foodItems array
    setFoodItems((prevFoodItems) =>
      prevFoodItems.map((item) =>
        item.id === selectedProduct ? { ...item, rating: newRating } : item
      )
    );
  };

  // Calculate the star percentage
  const getStarPercentage = (rating) => {
    return `${Math.round((rating / starsTotal) * 100)}%`;
  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <select
          id="product-select"
          className="form-control custom-select"
          onChange={handleProductSelect}
          value={selectedProduct || "0"}
        >
          <option value="0" disabled>
            Select Product
          </option>
          {foodItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <input
          type="number"
          id="rating-control"
          className="form-control"
          step="0.1"
          max="5"
          placeholder="Rate 1 - 5"
          disabled={!selectedProduct}
          value={rating}
          onChange={handleRatingChange}
        />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Food</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id} className={item.id}>
              <td>{item.name}</td>
              <td>
                <div className="stars-outer">
                  <div
                    className="stars-inner"
                    style={{ width: getStarPercentage(item.rating) }}
                  ></div>
                </div>
                <span className="number-rating">{item.rating}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rating;
