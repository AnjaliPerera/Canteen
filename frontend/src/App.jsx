import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import Menu from './Pages/Menu.jsx'; // Import Menu page
import FoodSelection from './Pages/FoodSelection.jsx'; // Import FoodSelection page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} /> {/* Menu route */}
        <Route path="/foodselection" element={<FoodSelection />} /> {/* Add FoodSelection route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
