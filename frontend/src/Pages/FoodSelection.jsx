import React, { useState } from 'react';
import './FoodSelection.css';

function FoodSelection() {
  const [orderItems, setOrderItems] = useState([
    { id:0, name: 'Chicken Potion', price: 100, quantity: 1, image:'Chicken_potion.png', available: true, selected:false},
    { id:1, name: 'Sausage', price: 80, quantity: 1, image:'Sausage.png',available:false, selected:false},
    { id:2, name: 'Boiled Egg', price: 70, quantity: 1, image:'Boiled_egg.png',available:true, selected:false},
    { id:3, name: 'Fried Egg', price: 70, quantity: 1, image:'Fried_egg.png',available:false, selected:false},
    { id:4, name: 'Fried Fish', price: 80, quantity: 1, image:'Fried_fish.png',available:true, selected:false}
    
  ]);

  const handleAdd = (id) => {
    const newOrder = orderItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setOrderItems(newOrder);
  };
  
  const handleRemove = (id) => {
    const newOrder = orderItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setOrderItems(newOrder);
  };
  

  const handleToggleSelect = (id) => {
    const newOrder = [...orderItems];
    newOrder[id].selected = !newOrder[id].selected;
    setOrderItems(newOrder);
  };

  const handleCancelOrder = () => {
    const resetOrder = orderItems.map(item => ({
      ...item,
      quantity: 1,
      selected: false,
    }));
    setOrderItems(resetOrder);
  };
  
  const handleSendOrder = async () => {
    const selectedItems = orderItems.filter(item => item.selected);
    if (selectedItems.length === 0) {
      alert('Please select items to order.');
      return;
    }

    const order = {
      orderNumber: 'L312', 
      items: selectedItems,
      totalPrice: totalPrice,
      pickupTime: document.querySelector('select').value,
    };

    try {
      const response = await fetch('https://your-backend-api.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        alert('Your order has been placed successfully!');
        handleCancelOrder();
      } else {
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while placing the order. Please try again later.');
    }
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
          .map((item, id) => (
            <div className="selected-item" key={id}>
              <img src={item.image} alt={`${item.name}`} className="order-image" />
              <div className="order-details">
                <h3>{item.name}</h3>
                <p>LKR {item.price}.00</p>
                <div className="quantity-control">
                <button 
                  onClick={() => handleRemove(item.id)} 
                  disabled={item.quantity <= 1 || !item.selected}
                >
                  -
                </button>
                <span> Quantity: {item.quantity}</span>
                <button 
                  onClick={() => handleAdd(item.id)} 
                  disabled={!item.available || !item.selected}
                >
                  +
                </button>
                </div>
              </div>
            </div>
          ))}
        <div className="pickup-time">
          <label>Select pickup time:</label>
          <select>
            <option>10.30 AM - 11.00 AM</option>
            <option>11:00 AM - 11:30 AM</option>
            <option>12:00 PM - 12:30 PM</option>
            <option>1:00 PM - 1:30 PM</option>
          </select>
        </div>  
        <h3>Total: LKR {totalPrice}</h3>
        <div className="order-buttons">
          <button className="cancel-btn" onClick={handleCancelOrder}>Cancel Order</button>
          <button className="send-btn" onClick={handleSendOrder}>Send Order</button>
        </div>
      </div>
    </div>
  );
}

export default FoodSelection;
