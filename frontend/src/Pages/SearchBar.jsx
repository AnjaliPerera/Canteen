import React from 'react';
import './SearchBar.css';

const SearchBar = ({ mealType, setMealType }) => {
    // Function to handle meal type change
    const handleMealTypeChange = (e) => {
        setMealType(e.target.value);
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" />

            {/* Dropdown for selecting meal type */}
            <select value={mealType} onChange={handleMealTypeChange}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Extra Curry">Extra Curry</option>
                <option value="All">All</option>
            </select>
        </div>
    );
};

export default SearchBar;
