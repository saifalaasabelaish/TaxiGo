import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT } from './config.js';
import adminRoutes from './routers/adminRoutes.js';
import driverRoutes from './routers/driverRoutes.js';
import historyRoutes from './routers/historyRoutes.js';
import taxiStandRoutes from './routers/taxiStandRoutes.js';
import userRoutes from './routers/userRoutes.js';
import contactRoutes from './routers/ContactRoutes.js';
import coordinatesRouter, { sendCoordinates } from './routers/CoordinatesRoutes.js'; 
import ratingRoutes from './routers/ratingRoutes.js';

import http from 'http';
import { Server } from 'socket.io';

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
app.use('/Coordinates', coordinatesRouter); 
app.use('/contacts', contactRoutes); 
app.use('/rating', ratingRoutes);

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome To TaxiGo');
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Attach socket.io to the app
app.set('socketio', io);

// Socket.io connection: 
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start sending coordinates when the server starts
sendCoordinates(io);

server.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
