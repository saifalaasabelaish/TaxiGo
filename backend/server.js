import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT } from './config.js';
import adminRoutes from './routers/adminRoutes.js';
import driverRoutes from './routers/driverRoutes.js';
import historyRoutes from './routers/historyRoutes.js';
import taxiStandRoutes from './routers/taxiStandRoutes.js';
import userRoutes from './routers/userRoutes.js';
import coordinatesRouter from './routers/CoordinatesRoutes.js'; // Import the coordinates router
import http from 'http';
import { Server } from 'socket.io';
import cron from 'node-cron';
import Coordinates from './models/Coordinates.js'; // Adjust the path as necessary

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://saifalaa099:aZ9FVwl38JHHi6jd@taxigo.fz7h5jg.mongodb.net/?retryWrites=true&w=majority&appName=taxigo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB'))
.catch(error => console.error('Connection to DB failed:', error));

app.use('/Admin', adminRoutes);
app.use('/Driver', driverRoutes);
app.use('/History', historyRoutes);
app.use('/TaxiStand', taxiStandRoutes);
app.use('/User', userRoutes);
app.use('/Coordinates', coordinatesRouter); // Use the coordinates router

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome To TaxiGo');
});

// Initialize HTTP server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Function to fetch and send coordinates
const sendCoordinates = async () => {
  try {
    const coordinates = await Coordinates.find().sort({ timestamp: 1 });
    let index = 0;

    const interval = setInterval(() => {
      if (index < coordinates.length) {
        io.emit('coordinates', coordinates[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);
  } catch (error) {
    console.error('Failed to retrieve coordinates:', error);
  }
};

// Start sending coordinates when a client connects
io.on('connection', () => {
  sendCoordinates();
});

// Start the server
server.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
