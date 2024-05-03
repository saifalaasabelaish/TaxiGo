import express from "express";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import Admin from './models/Admin.js';

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://saifalaa099:aZ9FVwl38JHHi6jd@taxigo.fz7h5jg.mongodb.net/?retryWrites=true&w=majority&appName=taxigo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch(error => console.error("Connection to DB failed:", error));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome To TaxiGo');
});

app.listen(PORT, () => {
    console.log(`App is listening to port : ${PORT}`);
});
