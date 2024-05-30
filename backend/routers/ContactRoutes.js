// routers/contactRoutes.js
import express from 'express';
const router = express.Router();
import Contact from '../models/Contact.js';

// Save data to db
router.post('/', async (req, res) => {
    const { name, title, message, phoneNumber, emailAddress } = req.body;
    
    const newContact = new Contact({
        name,
        title,
        message,
        phoneNumber,
        emailAddress
    });

    try {
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fetch all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
