import React from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.css';


function Reviews() {
    const reviews = [
        // Sample data (replace with dynamic data if available)
        {
          id: 1, // Added unique ID for better key management
          reviewer: { name: 'Jon Sena', profileImage: 'path/to/image.jpg', timeAgo: '2 days ago' },
          reviewText: 'The noodles at Rome Canteen are always a hit! ...',
          foodImage: 'path/to/food.jpg',
          rating: 4.5,
        },
        // Add more review objects as needed

        {
          id: 2, // Added unique ID for better key management
          reviewer: { name: 'Jon Sena', profileImage: 'path/to/image.jpg', timeAgo: '2 days ago' },
          reviewText: 'The noodles at Rome Canteen are always a hit! ...',
          foodImage: 'path/to/food.jpg',
          rating: 4.5,
        },
        {
          id: 2, // Added unique ID for better key management
          reviewer: { name: 'Jon Sena', profileImage: 'path/to/image.jpg', timeAgo: '2 days ago' },
          reviewText: 'The noodles at Rome Canteen are always a hit! ...',
          foodImage: 'path/to/food.jpg',
          rating: 4.5,
        }
      ];

  return (
    <div className="reviews-dashboard">
      <div className="reviews-content">
        <h2>Reviews</h2>
        <div className="review-cards">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
