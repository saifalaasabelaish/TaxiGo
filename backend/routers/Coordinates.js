import express from 'express';
import mongoose from 'mongoose';
import Coordinates from '../models/Coordinates.js';  // Adjust the path as necessary
const router = express.Router();

router.get('/:timestamp', async (req, res) => {
    try {
        const { timestamp } = req.params;
        console.log('Received request with timestamp:', timestamp);

        const queryTimestamp = new Date(timestamp);
        if (isNaN(queryTimestamp.getTime())) {
            return res.status(400).json({ error: 'Invalid timestamp format' });
        }

        console.log('Querying for timestamp:', queryTimestamp);

        // Find the first document that matches the timestamp
        const coordinate = await Coordinates.findOne({ timestamp: queryTimestamp });

        console.log('Found coordinate:', coordinate);

        if (!coordinate) {
            return res.status(404).json({ error: 'Coordinate not found' });
        }

        res.status(200).json(coordinate);
    } catch (error) {
        console.error('Failed to retrieve coordinate:', error);
        res.status(500).send('Error retrieving coordinate from the database.');
    }
});

export default router;
//coordinatesroutes.js