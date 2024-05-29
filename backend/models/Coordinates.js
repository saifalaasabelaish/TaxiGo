import mongoose from 'mongoose';

const CoordinatesSchema = new mongoose.Schema({
  longitude: {
    type: Number,  // Using Number for geographic coordinates
    required: true // Assuming these fields are required; adjust as necessary
  },
  latitude: {
    type: Number,  // Using Number for geographic coordinates
    required: true // Assuming these fields are required; adjust as necessary
  },
  timestamp: {
    type: Date,   // Using Date for timestamps
    required: true // Assuming these fields are required; adjust as necessary
  }
});

const Coordinates = mongoose.model('Coordinates', CoordinatesSchema);

export default Coordinates;