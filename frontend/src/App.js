import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Mainlayout from './Layout/Mainlayout';
import Home from './Pages/Home/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Mainlayout" element={<Mainlayout/>}>
                <Route index element={<Home/>}/>
              </Route>
      </Routes>
    </Router>
  );
}

export default App;
