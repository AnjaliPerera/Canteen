import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.css';
import axios from 'axios';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch review data from the API
        axios.get('http://localhost:8080/api/contact/messages')
            .then(response => {
                const fetchedReviews = response.data.map((message) => ({
                    id: message._id?.$oid || 'unknown',  // Use unique _id or a fallback
                    reviewer: {
                        name: `${message.firstName ?? 'Anonymous'} ${message.lastName ?? ''}`.trim(),
                        profileImage: 'path/to/default/image.jpg', // Placeholder profile image
                        timeAgo: 'Just now'  // Placeholder time since it's not provided
                    },
                    reviewText: message.message || 'No review provided.',
                    foodImage: 'path/to/food.jpg', // Placeholder food image
                    rating: 4.5, // Placeholder rating
                }));
                setReviews(fetchedReviews);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    }, []);

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
