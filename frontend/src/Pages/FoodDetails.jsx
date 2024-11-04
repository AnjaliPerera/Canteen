import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FoodDetails.css';
import SearchBar from './SearchBar1'; // Import SearchBar component

const FoodDetails = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [mealType, setMealType] = useState('All'); // State for meal type filter

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');

        if (!token) {
          setError('No token found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/api/fooditems', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFoodItems(response.data);
      } catch (err) {
        console.error('Error fetching food items:', err);
        setError('Failed to fetch food items.');
      }
    };

    fetchFoodItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in again.');
        return;
      }

      await axios.delete(`http://localhost:8080/api/fooditems/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFoodItems(prevItems => prevItems.filter(food => food.id !== id));
      console.log(`Deleted item with id: ${id}`);
    } catch (err) {
      console.error('Error deleting item:', err);
      setError('Failed to delete item.');
    }
  };

  const handleToggleAvailability = async (id) => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in again.');
        return;
      }

      await axios.put(`http://localhost:8080/api/fooditems/${id}/toggle-availability`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFoodItems(prevItems =>
        prevItems.map(food =>
          food.id === id ? { ...food, available: !food.available } : food
        )
      );
      console.log(`Toggled availability for item with id: ${id}`);
    } catch (err) {
      console.error('Error toggling availability:', err);
      setError('Failed to toggle availability.');
    }
  };

  // Filter food items based on search term and meal type
  const filteredFoodItems = foodItems.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (mealType === 'All' || food.foodType === mealType)
  );

  if (error) {
    return <p>Error loading food items: {error}</p>;
  }

  return (
    <div className="food-details">
      <h2>Food Details</h2>

      {/* Integrated SearchBar component with search term and meal type */}
      <SearchBar
        mealType={mealType}
        setMealType={setMealType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

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
          {filteredFoodItems.map(food => (
            <tr key={food.id}>
              <td><img src={food.imageUrl} alt={food.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{food.name}</td>
              <td>{food.foodType}</td>
              <td>LKR {food.price.toFixed(2)}</td>
              <td>
                <button
                  className={food.available ? 'available' : 'unavailable'}
                  onClick={() => handleToggleAvailability(food.id)}
                >
                  {food.available ? 'ON' : 'OFF'}
                </button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(food.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodDetails;
