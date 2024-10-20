import { IconButton } from '@mui/material';
const Footer = () => {
  return (
  <footer className=' bottom-0 left-0 z-[100]  w-full p-5  bg-my-footer   drop-shadow-header-shadow text-white'>
    <div className=" ml-[130px] md:ml-10 lg:ml-[180px] lg:gap-[120px] grid gap-8 row-gap-6 mb-8  sm:grid-cols-2 lg:grid-cols-3  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/**About */}
      <div className=" sm: col-span-1">
        <h5 className=" text-lg font-semibold">About Rome</h5>
        <div className=" w-44 mt-6 lg:max-w-sm">
          <p className="text-sm text-white-800">Rome Canteen serves fresh, healthy meals on campus, with dishes for every taste and dietary need</p>
        </div>
      </div>
      {/**contact */}
      <div className="sm: col-span-1">
        <h5 className=" text-lg font-semibold">Contact Us</h5>
        <div className="mt-6 lg:max-w-sm">
          <ul>
            <li> Email:</li>
            <li> info@romecanteen.com</li>
            <li> Phone:</li>
            <li> +9471 9876543</li>
          </ul>
        </div>
      </div>
      {/**open time */}
      <div className="sm: col-span-1">
        <h5 className=" text-lg font-semibold">Opening Hours</h5>
        <div className="mt-6 lg:max-w-sm">
          <ul>
            <li> Monday - Friday:</li>
            <li> 7:00AM - 8:00PM</li>
            <li> Saturday - Sunday</li>
            <li> 8:00AM - 6:00PM</li>
          </ul>
        </div>
      </div>

    </div>
    <div className=" border-t flex items-center justify-center">
      <ul className=" flex items-center gap-6 mt-4">

        {/**facebook */}
        <li>
          <a href="https://www.youtube.com/watch?v=cHHLHGNpCSA" class="hover:underline ">
            <IconButton sx={{color:"white"}}>
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </IconButton>
          </a>
        </li>

        {/**instagram */}
        <li>
          <a href="https://www.youtube.com/watch?v=IcrbM1l_BoI" class="hover:underline ">
          <IconButton sx={{color:"white"}}>
            <span class="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </IconButton> 
          </a>
        </li>

        {/**telegram */}
        <li>
          <a href="https://www.youtube.com/watch?v=cHHLHGNpCSA" class="hover:underline ">
          <IconButton sx={{color:"white"}}>
            <span class="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512">
                <path
                d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
              </svg>
            </span>
          </IconButton>
          </a>
        </li>

        {/**whtsapp */}
        <li>
          <a href="https://www.youtube.com/watch?v=IcrbM1l_BoI" class="hover:underline ">
            <IconButton sx={{color:"white"}}>
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </span>
            </IconButton>
          </a>
        </li>
        
      </ul>
    </div>
  </footer>
  )
}

export default Footer