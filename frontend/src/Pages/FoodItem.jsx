import React from 'react';


const FoodItem = ({ item, onToggleSelect }) => {
  return (
    <div className="food-card">
      <div className={`availability-label ${item.available ? 'available' : 'out-of-stock'}`}>
        {item.available ? 'Available' : 'Out of Stock'}
      </div>
      <img src={item.image} alt={`${item.name}`} />
      <h3>{item.name}</h3>
      <p>LKR {item.price}.00</p>
      <div className="button-control">
        <button onClick={onToggleSelect} className={item.selected ? 'delete-btn' : 'select-btn'} disabled={!item.available}>
          {item.selected ? 'Remove' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
