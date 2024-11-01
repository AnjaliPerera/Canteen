import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FoodItem from '../Components/FoodItem';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import '../Pages/Menu.css';

function Menu({ updateSelectedItems }) {
    const navigate = useNavigate();

    const [breakfastItems, setBreakfastItems] = useState([]);
    const [lunchItems, setLunchItems] = useState([]);
    const [dinnerItems, setDinnerItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    const [searchQuery, setSearchQuery] = useState(''); // State for search input

    // Time slots for each category
    const timeSlots = {
        Breakfast: [
            "7:00 AM - 7:30 AM", "7:30 AM - 8:00 AM", "8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM",
            "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM"
        ],
        Lunch: [
            "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM",
            "2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM", "3:00 PM - 3:30 PM", "3:30 PM - 4:00 PM",
            "4:00 PM - 4:30 PM", "4:30 PM - 5:00 PM"
        ],
        Dinner: [
            "6:00 PM - 6:30 PM", "6:30 PM - 7:00 PM", "7:00 PM - 7:30 PM"
        ]
    };

    // Fetch items from backend on component mount
    useEffect(() => {
        const fetchFoodItems = async (type, setItems) => {
            try {
                const response = await axios.get(`http://localhost:8080/api/fooditems/type/${type}`);
                const items = response.data;

                const itemsWithImages = items.map((item) => ({
                    ...item,
                    image: item.imageUrl,
                }));

                setItems(itemsWithImages);
            } catch (error) {
                console.error(`Error fetching ${type} items:`, error);
            }
        };

        fetchFoodItems("Breakfast", setBreakfastItems);
        fetchFoodItems("Lunch", setLunchItems);
        fetchFoodItems("Dinner", setDinnerItems);
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleToggleSelect = (id, items, setItems) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setItems(updatedItems);

        const selectedItems = [
            ...breakfastItems.filter((item) => item.selected),
            ...lunchItems.filter((item) => item.selected),
            ...dinnerItems.filter((item) => item.selected),
        ];
        updateSelectedItems(selectedItems);
    };

    const handleConfirmOrder = () => {
        const selectedItems = [
            ...breakfastItems.filter(item => item.selected),
            ...lunchItems.filter(item => item.selected),
            ...dinnerItems.filter(item => item.selected),
        ];
        // Pass selectedItems, selectedCategory, and time slots to FoodSelection page
        navigate('/foodselection', {
            state: { selectedItems, selectedCategory, timeSlots: timeSlots[selectedCategory] }
        });
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter items based on search query and selected category
    const filteredItems = (items) =>
        items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div>
            <Header />
            <div className="food-section">
                {/* Search bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for food items..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Category selection */}
                <nav className="category-select">
                    <ul>
                        {["Breakfast", "Lunch", "Dinner"].map((category) => (
                            <li key={category}>
                                <button
                                    onClick={() => handleCategorySelect(category)}
                                    className={selectedCategory === category ? 'active' : ''}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Display filtered items based on search query and category */}
                <section id={selectedCategory.toLowerCase()}>
                    <h2>{selectedCategory}</h2>
                    <div className="food-items">
                        {selectedCategory === 'Breakfast' && filteredItems(breakfastItems).map((item) => (
                            <FoodItem
                                key={item.id}
                                item={item}
                                onToggleSelect={() => handleToggleSelect(item.id, breakfastItems, setBreakfastItems)}
                            />
                        ))}
                        {selectedCategory === 'Lunch' && filteredItems(lunchItems).map((item) => (
                            <FoodItem
                                key={item.id}
                                item={item}
                                onToggleSelect={() => handleToggleSelect(item.id, lunchItems, setLunchItems)}
                            />
                        ))}
                        {selectedCategory === 'Dinner' && filteredItems(dinnerItems).map((item) => (
                            <FoodItem
                                key={item.id}
                                item={item}
                                onToggleSelect={() => handleToggleSelect(item.id, dinnerItems, setDinnerItems)}
                            />
                        ))}
                    </div>
                </section>

                <div className="bottom-button">
                    <button onClick={handleConfirmOrder}>Confirm / Customize Your Order</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;