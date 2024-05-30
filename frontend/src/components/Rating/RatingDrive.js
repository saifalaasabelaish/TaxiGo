import React, { useState } from 'react';
import backgroundImage from "../../assets/home_pic.png";
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

  const submitReview = async (event) => {
    event.preventDefault();

    const reviewData = {
      rating,
      review,
    };

    try {
      const response = await fetch('http://localhost:5001/rating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        alert(`Your review has been submitted: ${review} with a rating of ${rating} stars. THANK YOU`);
        setReview('');
        setRating(0);
      } else {
        const result = await response.json();
        console.error('Failed to submit review:', result.message);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header">
              Rate Your Drive
            </div>
            <div className="card-body">
              <h5 className="card-title">How was your trip with our website?</h5>
              <p className="card-text">Your feedback is important to us and helps improve our service.</p>
              <div className="d-flex justify-content-center my-3">
                <Rating
                  count={5}
                  onChange={ratingChanged}
                  size={50}
                  activeColor="#ffc107"
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
        <div className="background-overlay"></div>
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
    </div>
  );
};

export default RatingDrive;
