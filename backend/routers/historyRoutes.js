import express from 'express';
import History from '../models/History.js';

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { destination, pickupLocation,passengerCount,additionalPreferences } = req.body;

    const newHistoryEntry = new History({
      destination,
      pickupLocation,
      passengerCount,
      additionalPreferences,
    });

    await newHistoryEntry.save();
    res.status(201).json({ message: 'History entry created successfully', newHistoryEntry });
  } catch (error) {
    console.error('Error creating history entry:', error);
    res.status(500).json({ message: 'Failed to create history entry', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const historyEntries = await History.find();
    res.status(200).json(historyEntries);
  } catch (error) {
    console.error('Error fetching history entries:', error);
    res.status(500).json({ message: 'Failed to fetch history entries', error: error.message });
  }
});
export default router;
