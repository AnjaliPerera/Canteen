import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import OwnerDashboard from './Pages/OwnerDashboard.jsx'; // Updated to OwnerDashboard
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import FoodSelection from './Pages/FoodSelection.jsx';
import Order from './Pages/Order.jsx';
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';

function ProtectedRoute({ children, roleRequired }) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
        console.log("Redirecting to login: No token found");
        return <Navigate to="/" />;
    }

    if (role === "USER" && roleRequired !== "USER") {
        console.log("Redirecting to home: Role is USER");
        return <Navigate to="/home" />;
    }

    if (roleRequired && role !== roleRequired) {
        console.log(`Redirecting to menu: Role is ${role}, but ${roleRequired} required`);
        return <Navigate to="/menu" />;
    }

    return children;
}

function App() {
    const [selectedItems, setSelectedItems] = useState([]);

    const updateSelectedItems = (items) => {
        setSelectedItems(items);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu updateSelectedItems={updateSelectedItems} />} />
                <Route path="/foodselection" element={<FoodSelection selectedItems={selectedItems} />} />
                <Route path="/order" element={<Order />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />

                {/* Protected route for OWNER role to access OwnerDashboard */}
                <Route
                    path="/dashboard/*"
                    element={
                        <ProtectedRoute roleRequired="OWNER">
                            <OwnerDashboard />
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
        </BrowserRouter>
    );
}

export default App;
