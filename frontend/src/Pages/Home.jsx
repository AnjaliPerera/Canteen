import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import homemain from '../assets/restaurants-in-vietnam.jpg';
import './Home.css';
import food1 from '../assets/images.jpg';
import food2 from '../assets/download.jpg';

const Reviewusers = [
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product1",
      rating: 3.4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product2",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product3",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product4",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product5",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product6",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product7",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product8",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product9",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product10",
      rating:4,
  },
];

const Reviewusers1 = [
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product1",
      rating: 3.4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product2",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product3",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product4",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product5",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product6",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product7",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product8",
      rating:4,
  },
  {
      imageUrl:food1,
      price:"100",
      productTitle:"Product9",
      rating:4,
  },
  {
      imageUrl:food2,
      price:"100",
      productTitle:"Product10",
      rating:4,
  },
];

const Home = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6); // default visible items
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 840) setVisibleItems(2);
      else if (window.innerWidth < 1040) setVisibleItems(3);
      else if (window.innerWidth < 1240) setVisibleItems(5);
      else setVisibleItems(6);
    };

    updateVisibleItems(); // Set initial count
    window.addEventListener('resize', updateVisibleItems); // Listen to resize events
    return () => window.removeEventListener('resize', updateVisibleItems); // Clean up
  }, []);

  const handleSlideChange = (type, listLength, isPrimary) => {
    const currentCount = isPrimary ? count : count1;
    const setCurrentCount = isPrimary ? setCount : setCount1;

    if (type === "increment") {
      setCurrentCount(currentCount >= listLength - visibleItems ? currentCount : currentCount + 1);
    } else {
      setCurrentCount(currentCount <= 0 ? 0 : currentCount - 1);
    }
  };

  // Button click handler to navigate to the Menu page
  const handleViewMenuClick = () => {
    navigate('/menu'); // Navigate to the menu page
  };

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

      <div className='swiper'>
        <div className="card-swiper">
          <h1>Short-Eates</h1>
          <div className="card-list">
            <div className="card-item">
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", Reviewusers.length, true)}>
                <div></div>
              </div>
              {Reviewusers.slice(count, count + 6).map(({ imageUrl, price, productTitle, rating }, index) => (
                <ReviewUser
                  key={index}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={productTitle}
                  rating={rating || 0}
                  id={index}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", Reviewusers.length, true)}>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-swiper1">
          <h1>Drinks</h1>
          <div className="card-list">
            <div className="card-item">
              <div className='arr1 left' onClick={() => handleSlideChange("decrement", Reviewusers1.length, false)}>
                <div></div>
              </div>
              {Reviewusers1.slice(count1, count1 + 6).map(({ imageUrl, price, productTitle, rating }, index) => (
                <ReviewUser
                  key={index}
                  imageUrl={imageUrl}
                  price={price}
                  productTitle={productTitle}
                  rating={rating || 0}
                  id={index}
                />
              ))}
              <div className='arr right' onClick={() => handleSlideChange("increment", Reviewusers1.length, false)}>
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

const ReviewUser = ({ imageUrl, price, productTitle, index, rating }) => {
  const starPercentage = (rating / 5) * 100;
  return (
    <div className='card-link '>
      <img src={imageUrl} alt={`review_user_${index}`} className="imge" />
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
