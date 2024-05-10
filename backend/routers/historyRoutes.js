import express from 'express';
import History from '../models/History.js';

const router = express.Router();

// Route to get all history entries
router.get('/', async (req, res) => {
  try {
    const history = await History.find().populate('driver user');
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get history', error: error.message });
  }
});

// Route to get history entries for a specific driver
router.get('/driver/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const history = await History.find({ driver: id }).populate('driver user');
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get history', error: error.message });
  }
});

// Route to get history entries for a specific user
router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const history = await History.find({ user: id }).populate('driver user');
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get history', error: error.message });
  }
});

export default router;
