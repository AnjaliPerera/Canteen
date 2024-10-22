import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import Mainlayout from './Layout/Mainlayout.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Mainlayout" element={<Mainlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
