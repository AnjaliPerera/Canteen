import React, { useState } from 'react';
import { storage } from "../config/firebaseConfig"; // Firebase storage instance
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
  const [mealName, setMealName] = useState('');
  const [price, setPrice] = useState('');
  const [foodType, setFoodType] = useState('');
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!mealName || !price || !foodType || !image) {
      alert('Please fill out all fields!');
      return;
    }

    try {
      // Step 1: Upload image to Firebase Storage with progress tracking
      const imageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Error during image upload:", error);
          alert("Image upload failed. Please try again.");
          setUploadProgress(0); // Reset progress on error
        },
        async () => {
          // On successful upload, get the download URL
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Image URL:", imageUrl);

          // Step 2: Create a FormData object to hold all data
          const formData = new FormData();
          formData.append("name", mealName);
          formData.append("price", price);
          formData.append("foodType", foodType);
          formData.append("imageUrl", imageUrl); // Firebase URL as string

          try {
            const response = await axios.post('http://localhost:8080/api/fooditems/add', formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });

            if (response.status === 200) {
              alert('Product added successfully!');
              // Clear form fields upon successful addition
              setMealName('');
              setPrice('');
              setFoodType('');
              setImage(null);
              setUploadProgress(0);
            } else {
              alert('Failed to add product. Please try again.');
            }
          } catch (error) {
            console.error("Error saving data to backend:", error);
            alert("Failed to save product data. Please check the backend.");
          }
        }
      );
    } catch (error) {
      console.error("Error uploading image or saving data:", error);
      alert(`An error occurred: ${error.message || 'Unexpected error'}`);
    }
    // clear the form fields after submission
    setMealName('');
    setPrice('');
    setFoodType('');
  };

  return (
    <div className="add-product-container">
      <div className="sidebar">
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
        </div>
        <ul className="menu">
            <li>Dashboard</li>
            <li>Order List</li>
            <li>Order Detail</li>
            <li>Customer</li>
            <li>Analytics</li>
            <li>Reviews</li>
            <li>Foods</li>
            <li className="active">Food Edit</li>

        </ul>
      </div>

      <div className="form-section">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="image-upload">
            <label htmlFor="file-input">
              <img src={image ? URL.createObjectURL(image) : "/icon.jpg"} alt="Upload" />
            </label>
            <input id="file-input" type="file" onChange={handleImageChange} style={{ display: 'none' }} />
            <p>Upload Photo</p>
          </div>

          {uploadProgress > 0 && (
            <div className="upload-progress">
              <p>Uploading: {Math.round(uploadProgress)}%</p>
            </div>
          )}

          <div className="form-group">
            <label>Meal Name</label>
            <input
              type="text"
              placeholder="Enter meal name"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              placeholder="LKR"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Food Type</label>
            <select
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Extra Curry">Extra Curry</option>
              <option value="Short Eats">Short Eats</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Add Now</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
