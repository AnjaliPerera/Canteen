import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './Review.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { Rating } from '@mui/material';

const Reviewusers1 = [
    {
        imageUrl:"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
        price:"100",
        productTitle:"Product1",
    },
    {
        imageUrl:"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
        price:"100",
        productTitle:"Product2",
    },
    {
        imageUrl:"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
        price:"100",
        productTitle:"Product3",
    },
    {
        imageUrl:"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
        price:"100",
        productTitle:"Product4",
    },
    {
        imageUrl:"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
        price:"100",
        productTitle:"Product5",
    },
    {
        imageUrl:"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
        price:"100",
        productTitle:"Product6",
    },
]
export const Review1 = ({title,rowsCount}) => {
  return (

    <section  style={{
        boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }}
    className=' w-full mt-3 p-2'>
        <h1 className=' text-lg font-bold mb-3'>{title}</h1>
        <Swiper
        slidesPerView={3}
        breakpoints={{
          768:{
            slidesPerView:4
          },
          1024:{
            slidesPerView:6
          }
        }}
        grid={{
          rows:Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        
      >
        {Reviewusers1.map(({imageUrl,price,productTitle},index)=>(
            <SwiperSlide key={index}>
                <ReviewUser1 
                imageUrl={imageUrl} 
                price={price} 
                productTitle={productTitle} 
                id={index}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

const ReviewUser1 = ({imageUrl,price,productTitle,id})=>
    <div className=' w-full mb-7 '>
        <img src={imageUrl} alt={`review_user_${id}`} className=" w-full object-contain"/>
        <h3 className=' text-sm font-semibold text-stone-900'>{productTitle}</h3>
        <h3 className='text-stone-900 font-bold text-lg'>Rs.{price}</h3>
        <Rating name={imageUrl} value={2.5} precision={0.1} size="small" readOnly/>
    </div>
