import express from 'express';
import Rating from '../models/Rating.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { rating, review } = req.body;
  
  try {
    const newRatingReview = new Rating({
      rating,
      review,
    });

    await newRatingReview.save();
    res.status(201).json({ message: 'Rating and review submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit rating and review', error });
  }
});

export default router;
