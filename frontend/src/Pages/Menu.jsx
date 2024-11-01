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
    const [selectedCategory, setSelectedCategory] = useState('Breakfast'); // Default to Breakfast

    // Time slots for each category
    const timeSlots = {
        Breakfast: [
            "7:00 - 7:30", "7:30 - 8:00", "8:00 - 8:30", "8:30 - 9:00",
            "9:00 - 9:30", "9:30 - 10:00 ", "10:00 - 10:30", "10:30 - 11:00"
        ],
        Lunch: [
            "12:00 - 12:30", "12:30 - 13:00", "13:00 - 13:30", "13:30 - 14:00",
            "14:00 - 14:30", "14:30 - 14:00", "15:00 - 15:30", "15:30 - 16:00",
            "16:00 - 16:30", "16:30 - 17:00"
        ],
        Dinner: [
            "18:00 - 18:30", "18:30 - 19:00", "19:00 - 19:30"
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

    return (
        <div>
            <Header />
            <div className="food-section">
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

                <section id={selectedCategory.toLowerCase()}>
                    <h2>{selectedCategory}</h2>
                    <div className="food-items">
                        {selectedCategory === 'Breakfast' && breakfastItems.map((item) => (
                            <FoodItem
                                key={item.id}
                                item={item}
                                onToggleSelect={() => handleToggleSelect(item.id, breakfastItems, setBreakfastItems)}
                            />
                        ))}
                        {selectedCategory === 'Lunch' && lunchItems.map((item) => (
                            <FoodItem
                                key={item.id}
                                item={item}
                                onToggleSelect={() => handleToggleSelect(item.id, lunchItems, setLunchItems)}
                            />
                        ))}
                        {selectedCategory === 'Dinner' && dinnerItems.map((item) => (
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
