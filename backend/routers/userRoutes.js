import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location } = req.body;
    const newUser = new User({ firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create user', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get users', error: error.message });
  }
});

router.get('/email', async (req, res) => {
  try {
    const user = await User.findOne();
    if (user) {
      res.json({ email: user.email });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user email', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) 
      res.json({ success: true, message: 'Login successful' });
    else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to login', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location }, { new: true });
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
});

export default router;
