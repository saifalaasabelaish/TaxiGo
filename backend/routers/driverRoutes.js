import express from 'express';
import Driver from '../models/Driver.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      gender,
      location,
      carBrand
    } = req.body;
    const newDriver = new Driver({
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      gender,
      location,
      carBrand
    });
    await newDriver.save();
    res.status(201).json({
      message: 'Driver created successfully',
      driver: newDriver
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to create driver',
      error: error.message
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get drivers',
      error: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    await Driver.findByIdAndDelete(id);
    res.status(200).json({
      message: 'Driver deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete driver',
      error: error.message
    });
  }
});
router.get('/d', async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get drivers', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      gender,
      location,
      carBrand
    } = req.body;
    const updatedDriver = await Driver.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      gender,
      location,
      carBrand
    }, {
      new: true
    });
    res.status(200).json({
      message: 'Driver updated successfully',
      driver: updatedDriver
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update driver',
      error: error.message
    });
  }
});

export default router;