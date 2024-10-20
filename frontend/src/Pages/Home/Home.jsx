import Ads from "./Ads"
import { Review } from "./Review"
import { Review1 } from "./Review1"
import { Review2 } from "./Review2"

const Home = () => {
  return (
    <div className=" px-[30px]  pt-[232px] pb-[47px] w-full h-screen overflow-y-scroll bg-[#FFF3E0] md:px-[100px]">
        <Ads/>
        <Review title="Short-eats" rowsCount={1}/>
        <Review1 title="Deserts" rowsCount={1}/>
        <Review2 title="Drinks" rowsCount={1}/>
    </div>
  )
}

export default Home
