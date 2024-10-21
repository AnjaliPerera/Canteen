
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { Outlet } from "react-router-dom"

const Mainlayout = () => {
  return (
    <div className="w-full  h-screen">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>

    </div>
  )
}

export default Mainlayout