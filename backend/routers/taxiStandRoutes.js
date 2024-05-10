import express from 'express';
import TaxiStand from '../models/TaxiStand.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { Name, email, password, mobileNumber } = req.body;
    const newTaxiStand = new TaxiStand({ Name, email, password, mobileNumber });
    await newTaxiStand.save();
    res.status(201).json({ message: 'Taxi stand created successfully', taxiStand: newTaxiStand });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create taxi stand', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const taxiStands = await TaxiStand.find();
    res.status(200).json(taxiStands);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get taxi stands', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await TaxiStand.findByIdAndDelete(id);
    res.status(200).json({ message: 'Taxi stand deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete taxi stand', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, email, password, mobileNumber } = req.body;
    const updatedTaxiStand = await TaxiStand.findByIdAndUpdate(id, { Name, email, password, mobileNumber }, { new: true });
    res.status(200).json({ message: 'Taxi stand updated successfully', taxiStand: updatedTaxiStand });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update taxi stand', error: error.message });
  }
});

export default router;
