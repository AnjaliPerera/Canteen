import React, { useState } from 'react'
import homemain from "../assets/restaurants-in-vietnam.jpg"
import './Home.css';
import food1 from "../assets/images.jpg"
import food2 from "../assets/download.jpg"


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
  
]
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
  
]

const Home = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0); // for the second swiper

  const handleSlideChange = (type, listLength, isPrimary) => {
    // Determine if we are modifying the first or second list
    const currentCount = isPrimary ? count : count1;
    const setCurrentCount = isPrimary ? setCount : setCount1;

    // Update the count based on increment or decrement
    if (type === "increment") {
      setCurrentCount(currentCount >= listLength - 6 ? currentCount : currentCount + 1);
    } else if (type === "decrement") {
      setCurrentCount(currentCount <= 0 ? 0 : currentCount - 1);
    }
  };
  const increament=()=>{
    if(window.innerWidth<640){
      if(count==Reviewusers.length-1){
        setCount(Reviewusers.length-1)
      }else{
        setCount(count+1)
      }
    }else if(window.innerWidth<840){
      if(count==Reviewusers.length-2){
        setCount(Reviewusers.length-2)
      }else{
        setCount(count+1)
      }
    }else if(window.innerWidth<1040){
      if(count==Reviewusers.length-3){
        setCount(Reviewusers.length-3)
      }else{
        setCount(count+1)
      }
    }
    else if(window.innerWidth<1240){
      if(count==Reviewusers.length-4){
        setCount(Reviewusers.length-4)
      }else{
        setCount(count+1)
      }
    }else{
      if(count==Reviewusers.length-6){
        setCount(Reviewusers.length-6)
      }else{
        setCount(count+1)
      }
    }
  };
  const decreament=()=>{
    if(count==0){
      setCount(0)
    }else{
      setCount(count-1)
    }
  };
  return (
    
    <div className='Home-container'>

        {/**first imag */}
        <div className='fistimage'>
            <img src={homemain} alt='homemain'/>
            <button class="btn">View Menu</button>
            <div className='text'>
                <h1>WELCOME to ROME</h1>
                <p>"More Than Meals – It's Where Memories Are Made."</p>
            </div>
        </div>

        {/**About */}
        <div></div>
        

        {/**rating */}
        <div className='swiper'>
          <div className="card-swiper">
            <h1>Short-Eates</h1>
            <div className="card-list">
              <div className="card-item">
              <div className='arr1 left'
              onClick={() => handleSlideChange("decrement", Reviewusers.length, true)}
              ><div></div></div>
                {Reviewusers.slice(count,count+6 ).map(({imageUrl,price,productTitle,rating},index)=>(
                  <ReviewUser 
                  imageUrl={imageUrl} 
                  price={price} 
                  productTitle={productTitle} 
                  rating={rating || 0}
                  id={index}/>
                ))}
                <div className='arr right'
                onClick={() => handleSlideChange("increment", Reviewusers.length, true)}
                ><div></div></div>
              </div>
            </div>
          </div>
          <div className="card-swiper1">
            <h1>Drinks</h1>
            <div className="card-list">
              <div className="card-item">
              <div className='arr1 left'
              onClick={() => handleSlideChange("decrement", Reviewusers1.length, false)}
              ><div></div></div>
                {Reviewusers1.slice(count1,count1+6 ).map(({imageUrl,price,productTitle,rating},index)=>(
                  <ReviewUser 
                  imageUrl={imageUrl} 
                  price={price} 
                  productTitle={productTitle} 
                  rating={rating || 0}
                  id={index}/>
                ))}
                <div className='arr right'
                onClick={() => handleSlideChange("increment", Reviewusers1.length, false)}
                ><div></div></div>
              </div>
            </div>
          </div>
        </div>

        {/**rating */}
    </div>
  )
  
}

export default Home

const ReviewUser = ({imageUrl,price,productTitle,index,rating})=>{
  const starPercentage = (rating / 5) * 100;
  return(
  <div className='card-link '>
      <img src={imageUrl} alt={`review_user_${index}`} className="imge"/>
      <h3 className=' titel'>{productTitle}</h3>
      <h3 className='price'>Rs.{price}</h3>

      {/**rating part */}
      <div class="star">
      <div class="stars-outer">
        <div class="stars-inner" style={{ width: `${starPercentage}%` }}></div>
      </div>
      </div>
      
  </div>
)
}
