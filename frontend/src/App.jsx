import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import FoodSelection from './Pages/ExtraCurrySelection.jsx'; // Import your component here

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Direct route for FoodSelection without Mainlayout */}
        <Route path="/extra-curry-selection" element={<FoodSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
