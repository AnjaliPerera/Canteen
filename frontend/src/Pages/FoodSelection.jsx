import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import '../Pages/FoodSelection.css';

function FoodSelection() {
  const location = useLocation();
  const { selectedItems = [], timeSlots = [] } = location.state || {}; // Get selected items and time slots from Menu

  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pickupTime, setPickupTime] = useState(timeSlots[0] || ""); // Default to the first time slot

  // Fetch extra curry items from the backend on component mount
  useEffect(() => {
    const fetchExtraCurryItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/fooditems/type/Extra Curry');
        const fetchedItems = response.data.map(item => ({
          ...item,
          quantity: 1, // Set default quantity to 1 for extra curry items
          selected: false,
          fromMenu: false,
        }));

        // Merge fetched items with selected items from Menu, setting quantity to 1 for all
        const mergedItems = fetchedItems.map(item => {
          const menuItem = selectedItems.find(selected => selected.id === item.id);
          if (menuItem) {
            return { ...item, selected: true, quantity: 1, fromMenu: true }; // Quantity set to 1 for menu items as well
          }
          return item;
        });

        // Add any new selected items from the Menu that aren’t in the extra curry list
        const newMenuItems = selectedItems.filter(
          selected => !fetchedItems.some(item => item.id === selected.id)
        ).map(item => ({ ...item, selected: true, quantity: 1, fromMenu: true })); // Set quantity to 1

        setOrderItems([...mergedItems, ...newMenuItems]);
      } catch (error) {
        console.error('Error fetching extra curry items:', error);
        alert('Failed to load extra curry items.');
      }
    };

    fetchExtraCurryItems();
  }, [selectedItems]);

  // Handle item quantity increase
  const handleAdd = (id) => {
    setOrderItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle item quantity decrease
  const handleRemove = (id) => {
    setOrderItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Toggle item selection
  const handleToggleSelect = (id) => {
    setOrderItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Cancel order and reset items
  const handleCancelOrder = () => {
    const resetOrder = orderItems.map(item => ({
      ...item,
      selected: false,
      quantity: 1, // Reset quantity to 1 for all items
    }));
    setOrderItems(resetOrder);
  };

  // Send order to backend
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
      pickupTime: pickupTime,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/orders', order, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200 || response.status === 201) {
        alert('Your order has been placed successfully!');
        handleCancelOrder();
      } else {
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order. Please try again later.');
    }
  };

  // Calculate total price for selected items
  useEffect(() => {
    const total = orderItems.reduce((acc, item) =>
      item.selected ? acc + item.price * item.quantity : acc
    , 0);
    setTotalPrice(total);
  }, [orderItems]);

  return (
    <>
      <Header />
      <div className="food-selection">
        <h2>Extra Curry Selection</h2>
        <div className="food-items">
          {orderItems
            .filter(item => !item.fromMenu) // Only display extra curry items
            .map(item => (
              <div className="food-card" key={item.id}>
                <div className={`availability-label ${item.available ? 'available' : 'out-of-stock'}`}>
                  {item.available ? 'Available' : 'Out of Stock'}
                </div>
                <img src={item.imageUrl || 'placeholder_image_url_here'} alt={item.name} />
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
            .filter(item => item.selected) // Only display selected items
            .map((item, id) => (
              <div className="selected-item" key={id}>
                <img src={item.imageUrl || 'placeholder_image_url_here'} alt={item.name} className="order-image" />
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
            <select value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <h3>Total: LKR {totalPrice}</h3>
          <div className="order-buttons">
            <button className="cancel-btn" onClick={handleCancelOrder}>Cancel Order</button>
            <button className="send-btn" onClick={handleSendOrder}>Send Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FoodSelection;
