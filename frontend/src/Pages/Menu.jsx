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

    // Fetch items from backend on component mount
    useEffect(() => {
        const fetchFoodItems = async (type, setItems) => {
            try {
                // Call your backend API to get food items by type
                const response = await axios.get(`http://localhost:8080/api/fooditems/type/${type}`);
                const items = response.data;

                // If Firebase is used, retrieve the URL for each image here
                const itemsWithImages = await Promise.all(items.map(async (item) => {
                    const imageUrl = item.imageUrl; // Assuming your backend provides this URL directly
                    return { ...item, image: imageUrl };
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
        navigate('/foodselection', { state: { selectedItems } });
    };

    return (
        <div>
            <Header />
            <div className="food-section">
                <nav>
                    <ul>
                        <li><a href="#breakfast">Breakfast</a></li>
                        <li><a href="#lunch">Lunch</a></li>
                        <li><a href="#dinner">Dinner</a></li>
                    </ul>
                </nav>

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

                <div className="bottom-button">
                    <button onClick={handleConfirmOrder}>Confirm / Customize Your Order</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
