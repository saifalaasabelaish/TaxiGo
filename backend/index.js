import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { PORT } from "./config.js";
import Admin from './models/Admin.js';

const app = express();

app.use(express.json());

// Connection to MongoDB
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

// Registration endpoint
app.post('/register', async (req, res) => {
    const { name, email, password, phone, photo } = req.body;
    
    // Hash  pass
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user and hashed pass
    const user = new Admin({
        name,
        email,
        password: hashedPassword,
        phone,
        photo
    });

    try {
        await user.save();  // Save user to db
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user : ' + error.message);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
