import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
//use swiper js
const adsElement = [
    {
        imageUrl:'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg'
    },
    {
        imageUrl:'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg'
    },
    {
        imageUrl:'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg'
    },
    {
        imageUrl:'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg'
    },
    {
        imageUrl:'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg'
    },
]

const Ads = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className=' rounded-lg overflow-hidden'
      >
        {/**using map get image url */}
        {adsElement.map(({imageUrl},index)=>(
            <SwiperSlide>
                <Adu key={index} imageUrl={imageUrl} id={index}/>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}
export default Ads

const Adu = ({imageUrl,id}) =>
    <SwiperSlide>
        <img src={imageUrl} alt={`ad${id}`}
        className=' w-full object-contain rounded-lg'
        />
    </SwiperSlide>