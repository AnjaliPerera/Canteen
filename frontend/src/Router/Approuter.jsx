import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainlayout from "../Layout/Mainlayout"
import Home from "../Pages/Home/Home"
import Contact from "../Pages/Contact/Contact"
import Menu from "../Pages/Menu/Menu"
import Custom from "../Pages/Custom/Custom"
import Order from "../Pages/Order/Order"
import About from "../Pages/About/About"
//import LogIn from "../Pages/LogIn/LogIn"
//import SignUp from "../Pages/SignUp/SignUp"



const Approuter = () => {
  return (
    <BrowserRouter>
       <Routes>
              <Route path="/" element={<Mainlayout/>}>
                <Route index element={<Home/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="Menu" element={<Menu/>}/>
                <Route path="Custom" element={<Custom/>}/>
                <Route path="Order" element={<Order/>}/>
                <Route path="About" element={<About/>}/>
              </Route>
              {/*<Route path="/LogIn" element={<LogIn/>} />
              //<Route path="/SingUp" element={<SignUp />} />*/}
       </Routes>
    </BrowserRouter>
  )
}

export default Approuter