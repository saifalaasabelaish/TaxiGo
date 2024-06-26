import React, { useState } from 'react';
import './RatingDrive.css'; 
import Rating from 'react-rating-stars-component'; 

const RatingDrive = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0); 

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating); 
    console.log(newRating);
  };

  const submitReview = (event) => {
    event.preventDefault();
    alert(`Review submitted: ${review} with a rating of ${rating} stars.`);
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header">
              Rate Your Drive
            </div>
            <div className="card-body">
              <h5 className="card-title">How was your trip with our website?</h5>
              <p className="card-text">Your feedback is important to us and helps improve our service.</p>
              <div className ="starRating">
              <Rating
                count={5}
                onChange={ratingChanged}
                size={50}
                activeColor="#ffd700"
                value={rating}
                isHalf={true}
              />
</div>
              <form onSubmit={submitReview}>
                <textarea 
                  className="form-control" 
                  id="userReview" 
                  rows="4" 
                  value={review}
                  onChange={handleReviewChange}
                  placeholder="Write your review here"
                ></textarea>
                <button type="submit" className="btn btn-primary mt-3">Submit Rating</button>
              </form>
            </div>
            <div className="card-footer text-muted">
              Thank you for your feedback.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingDrive;
