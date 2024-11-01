import React from 'react';
import Reviews from './Components/Reviews/Reviews';
import Sidebar from './Components/Sidebar/Sidebar';
import './ReviewPage.css';

function ReviewPage() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Reviews />
      </div>
    </div>
  );
}

export default ReviewPage;
