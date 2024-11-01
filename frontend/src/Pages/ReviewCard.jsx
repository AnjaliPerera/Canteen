import PropTypes from 'prop-types';
import React from 'react';
import './ReviewCard.css';

function ReviewCard({ reviewer, reviewText, foodImage, rating }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={reviewer.profileImage} alt={`${reviewer.name}'s profile`} className="profile-image" />
        <div>
          <h4>{reviewer.name}</h4>
          <p>{reviewer.timeAgo}</p>
        </div>
      </div>
      <p className="review-text">{reviewText}</p>
      {foodImage ? (
        <div className="food-image">
          <img src={foodImage} alt={`${reviewer.name}'s food item`} className="food-image" />
        </div>
      ) : (
        <p className="food-image-placeholder">Image not available</p>
      )}
      <div className="rating">
        {'⭐'.repeat(Math.floor(rating))}
        <span>{rating}</span>
      </div>
    </div>
  );
}

// PropTypes for type checking
ReviewCard.propTypes = {
  reviewer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
  }).isRequired,
  reviewText: PropTypes.string.isRequired,
  foodImage: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

// Default props
ReviewCard.defaultProps = {
  reviewText: 'No review provided.',
  foodImage: '', // default to empty if not provided
};

export default ReviewCard;
