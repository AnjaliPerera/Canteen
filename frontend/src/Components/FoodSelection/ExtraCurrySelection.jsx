import React, { useState, useEffect } from 'react';
import './ExtraCurrySelection.css';
//ccghc
function FoodSelection() {
  const [orderItems, setOrderItems] = useState([]);
  
  // Fetch data from the backend
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/fooditems');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched food items:', data);
          setOrderItems(data);
        } else {
          console.error('Failed to fetch food items');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFoodItems();
  }, []); // Fetch data on component mount

  const handleToggleSelect = (id) => {
    const newOrder = [...orderItems];
    const itemIndex = newOrder.findIndex(item => item.id === id);
    newOrder[itemIndex].selected = !newOrder[itemIndex].selected;
    setOrderItems(newOrder);
  };

  const totalPrice = orderItems
    .filter(item => item.selected)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="food-selection">
      <h2>Extra Curry Selection</h2>
      <div className="food-items">
      {orderItems.map((item) => (
        <div className="food-card" key={item.id}>
          <div className={`availability-label ${item.available ? 'available' : 'out-of-stock'}`}>
            {item.available ? 'Available' : 'Out of Stock'}
          </div>
          <img src={item.image} alt={`${item.name}`} />
          <h3>{item.name}</h3>
          <p>LKR {item.price}.00</p>
          <div className="button-control">
            <button
              onClick={() => handleToggleSelect(item.id)}
              className={item.selected ? 'delete-btn' : 'select-btn'}
              disabled={!item.available}
            >
            {item.selected ? 'Delete' : 'Select'}
            </button>
          </div>
        </div>
      ))}
      </div>
      <div className="order-summary">
        <h4>Order No: L312</h4>
        {orderItems
          .filter(item => item.selected)
          .map((item) => (
            <div className="selected-item" key={item.id}>
              <img src={item.image} alt={`${item.name}`} className="order-image" />
              <div className="order-details">
                <h3>{item.name}</h3>
                <p>LKR {item.price}.00</p>
                <span> Quantity: {item.quantity}</span>
              </div>
            </div>
          ))}
        <h3>Total: LKR {totalPrice}</h3>
      </div>
    </div>
  );
}

export default FoodSelection;
