import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { pickup, destination, passengercount, preferences } = req.body;

    const newOrder = new Order({ pickup, destination, passengercount, preferences });
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create order', error: error.message });
  }
});

router.get('/counts', async (req, res) => {
    try {
      const ordersCount = await Order.countDocuments();
  
      res.json({
        orders: ordersCount,
      });
    } catch (error) {
      console.error('Error fetching counts:', error);
      res.status(500).send('An error occurred');
    }
  });

export default router;