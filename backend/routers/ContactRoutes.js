import express from 'express';
const router = express.Router();

import Contact from '../models/Contact.js';


//save data to db
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

export default router;
