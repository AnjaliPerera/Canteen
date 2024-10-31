import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AddProduct from './Pages/AddProduct.jsx'; // Assuming Dashboard is renamed to AddProduct
import FoodSelection from './Pages/FoodSelection.jsx';
import LogIn from './Pages/LogIn.jsx';
import Menu from './Pages/Menu.jsx';
import SignUp from './Pages/SignUp.jsx';

function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    console.log("Redirecting to login: No token found");
    return <Navigate to="/" />;
  }

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
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main menu accessible without protection */}
        <Route path="/menu" element={<Menu updateSelectedItems={updateSelectedItems} />} />

        {/* Food Selection page */}
        <Route path="/foodselection" element={<FoodSelection selectedItems={selectedItems} />} />

        {/* Protected route for OWNER role to access AddProduct */}
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
