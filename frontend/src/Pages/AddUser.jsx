import React, { useState } from 'react';
import './AddUser.css';

const AddUser = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userId || !userType || userType === "User Type") {
      alert('Please fill out all fields with valid data!');
      return;
    }

    console.log({ userName, userId, userType });

    // Clear the form fields after submission
    setUserName('');
    setUserId('');
    setUserType('');
  };

  return (
    <div className="add-user-container">
      <div className="form-section">
        <h1>Add New User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>User Id</label>
            <input
              type="text"
              placeholder="Enter Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="Owner">Owner</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Add Now</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
