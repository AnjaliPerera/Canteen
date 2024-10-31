
import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct.jsx'; // Assuming Dashboard is renamed to AddProduct
import Contact from './Pages/Contact.jsx';
import FoodSelection from './Pages/FoodSelection.jsx';
import Home from './Pages/Home.jsx';
import LogIn from './Pages/LogIn.jsx';
import Menu from './Pages/Menu.jsx';
import OrderList from './Pages/OrderList.jsx';
import SearchBar from './Pages/SearchBar.jsx';
import Sidebar from './Pages/Sidebar.jsx';
import SignUp from './Pages/SignUp.jsx';


function App() {

  const ProtectedRoute = ({ children, roleRequired }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');


    const [selectedItems, setSelectedItems] = useState([]);
    const [mealType, setMealType] = useState('Breakfast'); // State for meal type, default to 'Breakfast'

    
  // Update selected items when toggled in Menu
    const updateSelectedItems = (items) => {
      setSelectedItems(items);
    };

    if (!token) {
      console.log("Redirecting to login: No token found");
      return <Navigate to="/" />;
    }

    if (roleRequired && role !== roleRequired) {
      console.log(`Redirecting to menu: Role is ${role}, but ${roleRequired} required`);
      return <Navigate to="/menu" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<Menu updateSelectedItems={updateSelectedItems} />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/foodselection" element={<FoodSelection />} />
        <Route path="/Contact" element={<Contact/>} />

        {/* Protected route for OWNER role to access AddProduct (Dashboard) */}
        

        <Route
          path="/Order List"
          element={
            <ProtectedRoute roleRequired="OWNER">
              <div className="dashboard">
                <Sidebar />
                <div className="main-content">
                  <SearchBar mealType={mealType} setMealType={setMealType} />
                  <OrderList mealType={mealType} />
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      
        <Route
          path="/Food Edit"
          element={
            <ProtectedRoute roleRequired="OWNER">
              <AddProduct /> {/* Update the path if your component name is different */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
