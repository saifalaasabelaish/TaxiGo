import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT } from './config.js';
import adminRoutes from './routers/adminRoutes.js';
import driverRoutes from './routers/driverRoutes.js';
import historyRoutes from './routers/historyRoutes.js';
import taxiStandRoutes from './routers/taxiStandRoutes.js';
import userRoutes from './routers/userRoutes.js';
import ContactRoutes from './routers/ContactRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://saifalaa099:aZ9FVwl38JHHi6jd@taxigo.fz7h5jg.mongodb.net/?retryWrites=true&w=majority&appName=taxigo')
  .then(() => console.log('Connected to DB'))
  .catch(error => console.error('Connection to DB failed:', error));

// Define routes
app.use('/Admin', adminRoutes);
app.use('/Driver', driverRoutes);
app.use('/History', historyRoutes);
app.use('/TaxiStand', taxiStandRoutes);
app.use('/User', userRoutes);
app.use('/Contact', ContactRoutes);

// Root route
app.get('/', (req, res) => {
  return res.status(200).send('Welcome To TaxiGo');
});

// Start the server with error handling
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      throw err;
    }
  });
};

startServer(PORT);
