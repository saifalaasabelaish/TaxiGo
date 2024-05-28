import express from 'express';
import User from '../models/User.js';
import Token from '../models/Token.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location } = req.body;
    const newUser = new User({ firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create user', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get users', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, password, mobileNumber, dateOfBirth, gender, location }, { new: true });
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
});
// Request a password reset
router.post('/request-reset-password', async (req, res) => {
  console.log('Request to /request-reset-password received');
  const { email } = req.body;

  if (!email) {
      return res.status(400).json({ message: 'Email is required' });
  }

  try {
      const user = await User.findOne({ email });
      if (!user) {
          console.log('User not found');
          return res.status(400).json({ message: 'User with given email does not exist' });
      }

      const token = crypto.randomBytes(32).toString('hex');
      await new Token({ userId: user._id, token }).save();

      const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'lyl67629@gmail.com',
              pass: 'qcah wlly dars zlck',
          },
      });

      const resetLink = `http://localhost:3000/reset-password?token=${token}`;

      const mailOptions = {
          from: 'lyl67629@gmail.com',
          to: user.email,
          subject: 'Password Reset',
          text: `Please click the following link to reset your password: ${resetLink}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log('Error sending email', error);
              return res.status(500).send('Error sending email');
          }
          console.log('Password reset email sent');
          res.status(200).send('Password reset email sent');
      });
  } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).send('Internal Server Error');
  }
});

// Reset the password
router.post('/reset-password', async (req, res) => {
const { token, password } = req.body;

if (!token || !password) {
  return res.status(400).json({ message: 'Token and new password are required' });
}

try {
  console.log('Reset password request received with token:', token);
  const tokenDoc = await Token.findOne({ token });
  if (!tokenDoc) {
    console.log('Invalid or expired token');
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  console.log('Token document found:', tokenDoc);

  const user = await User.findById(tokenDoc.userId);
  if (!user) {
    console.log('User not found');
    return res.status(400).json({ message: 'User not found' });
  }

  console.log('User found:', user);

  // Hash the new password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  user.password = hashedPassword;
  await user.save();
  console.log('User password updated');

  await Token.deleteOne({ _id: tokenDoc._id });
  console.log('Token deleted');

  res.status(200).send('Password reset successful');
} catch (error) {
  console.error('Error processing request:', error);
  res.status(500).send('Internal Server Error');
}
});

export default router;