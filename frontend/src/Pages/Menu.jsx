import React, { useState } from 'react';
import './Menu.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';



import FoodItem from '../Components/FoodItem'; // Correct path to the FoodItem component
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import l1 from '../assets/l1.jpg';
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';
import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';
import d3 from '../assets/d3.jpg';
import d4 from '../assets/d4.jpg';


function Menu() {
    const navigate = useNavigate(); // Initialize navigate

  // Breakfast items
  const [breakfastItems, setBreakfastItems] = useState([
    { id: 0, name: 'Dhal curry and Bread', price: 80, quantity: 1, image: b1, available: true, selected: false },
    { id: 1, name: 'String Hoppers', price: 80, quantity: 1, image: b2, available: false, selected: false },
    { id: 2, name: 'Rice and Curry', price: 120, quantity: 1, image: b3, available: true, selected: false },
    { id: 3, name: 'Noodles', price: 80, quantity: 1, image: b4, available: false, selected: false },
  ]);

  // Lunch items
  const [lunchItems, setLunchItems] = useState([
    { id: 0, name: 'Rice and Curry (Veg)', price: 100, quantity: 1, image: l1, available: true, selected: false },
    { id: 1, name: 'Rice and Curry (Non-Veg)', price: 120, quantity: 1, image: l2, available: true, selected: false },
    { id: 2, name: 'Noodles', price: 800, quantity: 1, image: l3, available: true, selected: false },
  ]);

  // Dinner items
  const [dinnerItems, setDinnerItems] = useState([
    { id: 0, name: 'Kottu', price: 200, quantity: 1, image: d1, available: true, selected: false },
    { id: 1, name: 'Noodles', price: 80, quantity: 1, image: d2, available: true, selected: false },
    { id: 2, name: 'Rice and Curry', price: 120, quantity: 1, image: d3, available: false, selected: false },
    { id: 3, name: 'String Hoppers', price: 80, quantity: 1, image: d4, available: true, selected: false },
  ]);

  const handleToggleSelect = (id, items, setItems) => {
    const newOrder = [...items];
    newOrder[id].selected = !newOrder[id].selected;
    setItems(newOrder);
  };



 const handleConfirmOrder = () => {
    navigate('/foodselection'); // Navigate to the FoodSelection page on button click
  };



  return (
    <div className="food-section">
      <nav>
        <ul>
          <li><a href="#breakfast">Breakfast</a></li>
          <li><a href="#lunch">Lunch</a></li>
          <li><a href="#dinner">Dinner</a></li>
        </ul>
      </nav>

      {/* Breakfast Section */}
      <section id="breakfast">
        <h2>Breakfast</h2>
        <div className="food-items">
          {breakfastItems.map((item) => (
            <FoodItem
              key={item.id}
              item={item}
              onToggleSelect={() => handleToggleSelect(item.id, breakfastItems, setBreakfastItems)}
            />
          ))}
        </div>
      </section>

      {/* Lunch Section */}
      <section id="lunch">
        <h2>Lunch</h2>
        <div className="food-items">
          {lunchItems.map((item) => (
            <FoodItem
              key={item.id}
              item={item}
              onToggleSelect={() => handleToggleSelect(item.id, lunchItems, setLunchItems)}
            />
          ))}
        </div>
      </section>

      {/* Dinner Section */}
      <section id="dinner">
        <h2>Dinner</h2>
        <div className="food-items">
          {dinnerItems.map((item) => (
            <FoodItem
              key={item.id}
              item={item}
              onToggleSelect={() => handleToggleSelect(item.id, dinnerItems, setDinnerItems)}
            />
          ))}
        </div>
      </section>

       {/* Button at the bottom */}
            <div className="bottom-button">
              <button onClick={handleConfirmOrder}>Confirm / Customize Your Order</button>
            </div>
    </div>
  );
}

export default Menu;
