import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import homemain from '../assets/restaurants-in-vietnam.jpg';
import './Home.css';

const Home = () => {
  const [availableFoodItems, setAvailableFoodItems] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate();

  // Fetch available food items from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/fooditems/available');
        setAvailableFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching available food items:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 840) setVisibleItems(2);
      else if (window.innerWidth < 1040) setVisibleItems(3);
      else if (window.innerWidth < 1240) setVisibleItems(5);
      else setVisibleItems(6);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const handleSlideChange = (type, listLength, count, setCount) => {
    if (type === "increment") {
      setCount(count >= listLength - visibleItems ? count : count + 1);
    } else {
      setCount(count <= 0 ? 0 : count - 1);
    }
  };

  const handleViewMenuClick = () => {
    navigate('/menu');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filterItems = (items) => items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Separate food items by type for the different sections
  const shortEats = filterItems(availableFoodItems.filter(item => item.foodType === "Short Eats"));
  const drinks = filterItems(availableFoodItems.filter(item => item.foodType === "Drinks"));
  const desserts = filterItems(availableFoodItems.filter(item => item.foodType === "Desserts"));

  return (
    <div className='Home-container'>
      <div className='fistimage'>
        <img src={homemain} alt='homemain' />
        <button className="btn" onClick={handleViewMenuClick}>View Menu</button>
        <div className='text'>
          <h1>WELCOME to ROME</h1>
          <p>"More Than Meals – It's Where Memories Are Made."</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for food items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className='swiper'>
        {/* Short Eats Section */}
        <div className="card-swiper">
          <h1>Short Eats</h1>
          <div className="card-list">
            <div className="card-item">
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", shortEats.length, count, setCount)}>
                <div></div>
              </div>
              {shortEats.slice(count, count + visibleItems).map(({ id, imageUrl, price, name, rating }, index) => (
                <ReviewUser
                  key={id}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={name}
                  rating={rating || 0}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", shortEats.length, count, setCount)}>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Drinks Section */}
        <div className="card-swiper1">
          <h1>Drinks</h1>
          <div className="card-list">
            <div className="card-item">
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", drinks.length, count1, setCount1)}>
                <div></div>
              </div>
              {drinks.slice(count1, count1 + visibleItems).map(({ id, imageUrl, price, name, rating }, index) => (
                <ReviewUser
                  key={id}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={name}
                  rating={rating || 0}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", drinks.length, count1, setCount1)}>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desserts Section */}
        <div className="card-swiper2">
          <h1>Desserts</h1>
          <div className="card-list">
            <div className="card-item">
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", desserts.length, count2, setCount2)}>
                <div></div>
              </div>
              {desserts.slice(count2, count2 + visibleItems).map(({ id, imageUrl, price, name, rating }, index) => (
                <ReviewUser
                  key={id}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={name}
                  rating={rating || 0}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", desserts.length, count2, setCount2)}>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const ReviewUser = ({ imageUrl, price, productTitle, rating }) => {
  const starPercentage = (rating / 5) * 100;
  return (
    <div className='card-link'>
      <img src={imageUrl} alt={`review_user_${productTitle}`} className="imge" />
      <h3 className='titel'>{productTitle}</h3>
      <h3 className='price'>Rs.{price}</h3>
      <div className="star">
        <div className="stars-outer">
          <div className="stars-inner" style={{ width: `${starPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};
