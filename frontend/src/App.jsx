import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct.jsx';
import AddUser from './Pages/AddUser.jsx';
import Contact from './Pages/Contact.jsx';
import FoodSelection from './Pages/FoodSelection.jsx';
import Home from './Pages/Home.jsx';
import LogIn from './Pages/LogIn.jsx';
import Menu from './Pages/Menu.jsx';
import SidebarA from './Pages/SidebarA.jsx';
import SignUp from './Pages/SignUp.jsx';
import UserTable from './Pages/UserTable.jsx';

function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    console.log("Redirecting to login: No token found");
    return <Navigate to="/" />;
  }

  // Redirect "USER" role directly to Home if not already there
  if (role === "USER" && roleRequired !== "USER") {
    console.log("Redirecting to home: Role is USER");
    return <Navigate to="/home" />;
  }

  // Redirect to Menu if the required role doesn't match
  if (roleRequired && role !== roleRequired) {
    console.log(`Redirecting to menu: Role is ${role}, but ${roleRequired} required`);
    return <Navigate to="/menu" />;
  }

  return children;
}

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Update selected items when toggled in Menu
  const updateSelectedItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Home and menu accessible after login */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu updateSelectedItems={updateSelectedItems} />} />

        {/* Food Selection and Contact pages */}
        <Route path="/foodselection" element={<FoodSelection selectedItems={selectedItems} />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected route for OWNER role to access AddProduct (Dashboard) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roleRequired="OWNER">
              <AddProduct />
            </ProtectedRoute>
          }
        />

        {/* Protected route for USER role to access Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute roleRequired="USER">
              <Home />
            </ProtectedRoute>
          }
        />
        
      </Routes>
      <Router>
            <div className="app">
                <SidebarA />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<UserTable />} />
                        <Route path="/add-user" element={<AddUser />} /> {/* Corrected the route path for AddUser */}
                    </Routes>
                </div>
            </div>
        </Router>
    </BrowserRouter>
  );
}

export default App;
