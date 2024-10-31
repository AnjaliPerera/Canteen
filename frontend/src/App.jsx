
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Pages/AddProduct.jsx'; // Assuming Dashboard is renamed to AddProduct
import FoodSelection from './Pages/FoodSelection.jsx';
import LogIn from './Pages/LogIn.jsx';
import Menu from './Pages/Menu.jsx';
import SignUp from './Pages/SignUp.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  const ProtectedRoute = ({ children, roleRequired }) => {
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
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/foodselection" element={<FoodSelection />} />
        <Route path="/Contact" element={<Contact/>} />

        {/* Protected route for OWNER role to access AddProduct (Dashboard) */}
        <Route
          path="/dashboard"
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
