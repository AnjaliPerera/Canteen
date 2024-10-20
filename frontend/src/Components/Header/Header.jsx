import logo from '../../image/logo.jpg'
import kottu1 from '../../image/kottu1.png'
import rice from '../../image/riceandcurry-removebg-preview.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const Header = () => {
  const [isSearch,setIsSearch] = useState(false)
  return  <header className='overflow-hidden fixed  top-0 left-0 z-[100] h-[212px]  w-full py-5 px-2  bg-my-background flex items-center justify-between drop-shadow-header-shadow'>

    {/*header left */}
    <div>
         {/* hole circle */}
         <div className='absolute top-6 left-96 max-sm:invisible '>
            <div  class=" absolute top-16  left-3.5 rounded-full bg-[#D84315] size-40 flex items-center justify-center">
                <div class="w-32 h-32 rounded-full   bg-white">  
                </div>
            </div>
        </div>
          {/* rice and curry image */}
         <div className='absolute top-4 left-80 max-sm:invisible '>
            <img src={rice} alt='rice' className=' rounded-full w-40 h-48 object-contain '/>
        </div>

        <div className=' absolute top-[20px]  md:top-3 left-2 flex items-center gap-2'>
            <img src={logo} alt='logo' className=' w-20 h-20 object-contain rounded-full'/>
                <h1 
                   style={{
                    display:window.innerWidth<640?isSearch?"none":"inline-block":"inline-block",
                   }}
                className=' font-semibold '>
                    <h5 className=' text-base'>The Best Delicious Food</h5> 
                    <h6 className=' text-sm'>that meets your needs</h6>  
                </h1>
        </div>
        <div className=' absolute h-28 left-6 flex items-center gap-x-2 '>

            <div class="h-20 w-14 rounded-full bg-[#E0E0E0] justify-items-center">
                <img src={kottu1} alt='kottu1' className=' relative top-2  left-1.5 w-22 h-8 object-contain rounded-full  '/>
                <test className='relative top-3 left-[2px] font-semibold text-xs '>Home</test>
            </div>

            <div class="h-20 w-14 rounded-full  bg-[#F7931E] justify-items-center">
                <img src={kottu1} alt='kottu1' className=' relative top-2  left-[3.5px] w-22 h-8 object-contain rounded-full  '/>
                <test className='relative top-3 left-[2px] font-semibold text-xs'>Home</test>
            </div>

            <div class="h-20 w-14 rounded-full bg-[#E0E0E0] justify-items-center">
                <img src={kottu1} alt='kottu1' className=' relative top-2  left-[2.5px] w-22 h-8 object-contain rounded-full  '/>
                <test className='relative top-3 left-[2px] font-semibold text-xs'>Home</test>
            </div>
        </div>
    </div>

    {/*header right */}
    <div className=' absolute top-3 right-3 flex items-center'>
        
        <div className='  ml-2 overflow-hidden flex items-center rounded-full bg-[#ebae75]'>
            <input type="text" placeholder="Search" 
             style={{
                display:window.innerWidth<640?isSearch?"inline-block":"none":"inline-block",
             }}
              className=' hidden lg:w-[500px]  lg:inline-block ml-2 outline-none  p-2 font-semibold text-sm  w-[263.5px] bg-inherit'/>
            <IconButton onClick={()=>{
                if(window.innerWidth<640){
                    setIsSearch(!isSearch)
                }
            }}>
                <SearchIcon/>
            </IconButton>
        </div>
        <div>
            <IconButton>
                <div className=' relative rounded-full p-1'>
                  <ShoppingCartOutlinedIcon className=' text-black'/>
                  <div className=' absolute top-[2px] right-[0px] text-[7px] font-semibold text-white bg-black flex  items-center justify-center w-3 h-3 rounded-full'> 0 </div>
                </div>
            </IconButton>
        </div>
        <div>
            <IconButton sx={{color:"red"}}>
                <MenuIcon/>
            </IconButton>
        </div>
        {/* hole circle */}
        <div className='absolute  bottom-[85px] right-[110px] '>
            <div  class=" absolute top-16  left-3.5 rounded-full bg-[#D84315] size-40 flex items-center justify-center">
                <div class="w-32 h-32 rounded-full   bg-white">  
                </div>
            </div>
        </div>    
    </div>
  </header>;
  
}

export default Header

// matirial ui use the get image icon 