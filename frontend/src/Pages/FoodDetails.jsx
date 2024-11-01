import React from 'react';
import './FoodDetails.css';

const foodData = [
  { id: 1, name: 'String Hoppers', type: 'Main Meal', price: 'LKR 100.00', available: false },
  { id: 2, name: 'Dhal Curry and Bread', type: 'Main Meal', price: 'LKR 120.00', available: true },
  { id: 3, name: 'String Hoppers', type: 'Main Meal', price: 'LKR 100.00', available: false },
  { id: 4, name: 'Dhal Curry and Bread', type: 'Main Meal', price: 'LKR 120.00', available: true },
  { id: 5, name: 'String Hoppers', type: 'Main Meal', price: 'LKR 100.00', available: false },
  { id: 6, name: 'Dhal Curry and Bread', type: 'Main Meal', price: 'LKR 120.00', available: true },
];

const FoodDetails = () => {
  return (
    <div className="food-details">
      <h2>Food Details</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Food Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map(food => (
            <tr key={food.id}>
              <td><img src={`path/to/${food.name}.jpg`} alt={food.name} /></td>
              <td>{food.name}</td>
              <td>{food.type}</td>
              <td>{food.price}</td>
              <td>
                <button className={food.available ? 'available' : 'unavailable'}>
                  {food.available ? 'ON' : 'OFF'}
                </button>
              </td>
              <td>
                <button className="delete-btn">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodDetails;
