import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';

const Contact = () => {
  return (
    <div className=" px-[30px]  pt-[362px] pb-[5px] w-full h-screen overflow-y-scroll  md:px-[100px] flex items-center">
      {/**left part */}
       <div className=' px-2 bg-[#FFF3E0] w-[393px] h-[650.88px]'>
        <h1> Contact Information</h1>
        <div className=" flex items-center">
          <PhoneTwoToneIcon sx={{color:"#D84315"}}/>
          <text> +1012 3456 789</text>
        </div>
        <div className=" flex items-center">
          <EmailTwoToneIcon sx={{color:"#D84315"}}/>
          <text> demo@gmail.com</text>
        </div>
        <div className=" flex items-center">
          <FmdGoodTwoToneIcon sx={{color:"#D84315"}}/>
          <text>abc</text>
        </div>
       </div>

       {/**Right part */}
       <div></div>
    </div>
  )
}

export default Contact