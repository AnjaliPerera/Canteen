import React from 'react';
import './SearchBar.css';

const SearchBar = ({ mealType, setMealType, searchTerm, setSearchTerm }) => {
    // Function to handle meal type change
    const handleMealTypeChange = (e) => {
        setMealType(e.target.value);
    };

    // Function to handle search term change
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-bar">
            {/* Input for searching food items */}
            <input
                type="text"
                placeholder="Search for a food item..."
                value={searchTerm}
                onChange={handleSearchTermChange}
            />

            {/* Dropdown for selecting meal type */}
            <select value={mealType} onChange={handleMealTypeChange}>
                <option value="All">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Extra Curry">Extra Curry</option>
            </select>
        </div>
    );
};

export default SearchBar;
