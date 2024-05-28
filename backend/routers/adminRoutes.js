import express from 'express';
import Admin from '../models/Admin.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newAdmin = new Admin({ firstName, lastName, email, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create admin', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get admins', error: error.message });
  }
});

router.get('/email', async (req, res) => {
  try {
    const admin = await Admin.findOne(); 
    if (admin) {
      res.json({ email: admin.email });
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
    const admin = await Admin.findOne({ email });
    if (admin && admin.password === password) 
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
    await Admin.findByIdAndDelete(id);
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete admin', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(id, { firstName, lastName, email, password }, { new: true });
    res.status(200).json({ message: 'Admin updated successfully', admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update admin', error: error.message });
  }
});

export default router;
