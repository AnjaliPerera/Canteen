import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AddProduct from './Pages/AddProduct.jsx';
import FoodSelection from './Pages/FoodSelection.jsx';
import LogIn from './Pages/LogIn.jsx';
import Menu from './Pages/Menu.jsx';
import SignUp from './Pages/SignUp.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';
import Order from './Pages/Order.jsx';

function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    console.log("Redirecting to login: No token found");
    return <Navigate to="/" />;
  }

  if (roleRequired && role !== roleRequired) {
    console.log(`Redirecting to appropriate route: Role is ${role}, but ${roleRequired} required`);
    // Redirect users to the appropriate default page based on their role
    return role === "USER" ? <Navigate to="/home" /> : <Navigate to="/menu" />;
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

        {/* Routes accessible after login */}
        <Route
          path="/home"
          element={
            <ProtectedRoute roleRequired="USER">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu updateSelectedItems={updateSelectedItems} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foodselection"
          element={
            <ProtectedRoute>
              <FoodSelection selectedItems={selectedItems} />
            </ProtectedRoute>
          }
        />

        {/* Contact page, accessible by all logged-in users */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* Order page for viewing specific orders, accessible to logged-in users */}
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />

        {/* Protected route for OWNER role to access AddProduct (Dashboard) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roleRequired="OWNER">
              <AddProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
