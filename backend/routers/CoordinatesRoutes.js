import express from 'express';
import Coordinates from '../models/Coordinates.js';  // Adjust the path as necessary
const router = express.Router();

const sendCoordinates = async (io) => {
  try {
    // Sort the coordinates in ascending order based on the timestamp
    const coordinates = await Coordinates.find().sort({ timestamp: 1 });
    let index = 0;
    const interval = setInterval(() => {
      if (index < coordinates.length) {
        // Loop through the coordinates and send them
        io.emit('coordinates', coordinates[index]);
        index++;
      } else {
        // If all coordinates have been sent, clear the interval
        clearInterval(interval);
        io.emit('endOfCoordinates');
      }
    }, 10);
  } catch (error) {
    console.error('Failed to retrieve coordinates:', error);
  }
};

export { sendCoordinates };
export default router;