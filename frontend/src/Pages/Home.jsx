import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import homemain from '../assets/restaurants-in-vietnam.jpg';
import './Home.css';

const Home = () => {
  const [shortEats, setShortEats] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate();

  // Fetch data from backend with JWT token
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the JWT token from localStorage
        const token = localStorage.getItem('token');

        // Set up headers with the token
        const headers = {
          Authorization: `Bearer ${token}`
        };

        // Send requests with headers including the JWT token
        const shortEatsResponse = await axios.get('http://localhost:8080/api/fooditems/type/Short%20Eats', { headers });
        const drinksResponse = await axios.get('http://localhost:8080/api/fooditems/type/Drinks', { headers });
        const dessertsResponse = await axios.get('http://localhost:8080/api/fooditems/type/Desserts', { headers });

        setShortEats(shortEatsResponse.data);
        setDrinks(drinksResponse.data);
        setDesserts(dessertsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  const handleSlideChange = (type, listLength, isPrimary, isSecondary = false) => {
    const currentCount = isPrimary ? count : isSecondary ? count1 : count2;
    const setCurrentCount = isPrimary ? setCount : isSecondary ? setCount1 : setCount2;

    if (type === "increment") {
      setCurrentCount(currentCount >= listLength - visibleItems ? currentCount : currentCount + 1);
    } else {
      setCurrentCount(currentCount <= 0 ? 0 : currentCount - 1);
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
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", shortEats.length, true)}>
                <div></div>
              </div>
              {filterItems(shortEats).slice(count, count + visibleItems).map(({ imageUrl, price, name, rating }, index) => (
                <ReviewUser
                  key={index}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={name}
                  rating={rating || 0}
                  id={index}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", shortEats.length, true)}>
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
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", drinks.length, false, true)}>
                <div></div>
              </div>
              {filterItems(drinks).slice(count1, count1 + visibleItems).map(({ imageUrl, price, name, rating }, index) => (
                <ReviewUser
                  key={index}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={name}
                  rating={rating || 0}
                  id={index}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", drinks.length, false, true)}>
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
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", desserts.length, false, false)}>
                <div></div>
              </div>
              {filterItems(desserts).slice(count2, count2 + visibleItems).map(({ imageUrl, price, name, rating }, index) => (
                <ReviewUser
                  key={index}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={name}
                  rating={rating || 0}
                  id={index}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", desserts.length, false, false)}>
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
