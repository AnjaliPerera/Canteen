// components/HeaderDB.js
import React from 'react';
import './Title.css';

function Title() {
  return (
    <div className="title">
      <input type="text" placeholder="Search" className="search-bar" />
      <select className="meal-type">
        <option value="">Meal Type</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <select className="time-select">
        <option value="">Select Time</option>
      </select>
      <button className="reject-all">Reject All</button>
      <button className="accept-all">Accept All</button>
    </div>
  );
}

export default Title;
