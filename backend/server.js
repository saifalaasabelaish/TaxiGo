import express from 'express';
import mongoose from 'mongoose';
import { PORT } from './config.js';
import adminRoutes from "./routers/adminRoutes.js";
import driverRoutes from "./routers/driverRoutes.js";
import historyRoutes from "./routers/historyRoutes.js";
import taxiStandRoutes from "./routers/taxiStandRoutes.js";
import userRoutes from "./routers/userRoutes.js";


const app = express();

app.use(express.json());

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


app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome To TaxiGo');
});

app.listen(PORT, () => {
  console.log(`App is listening to port : ${PORT}`);
});
