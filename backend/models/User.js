import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    unique: true, 
    required: true, 
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: { type: String, required: true },
  mobileNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  createdAt: { type: Date, default: Date.now, immutable: true }, 
  dateOfBirth: { type: Date, required: true },
  gender: { 
    type: String, 
    required: true,
    enum: ['Male', 'Female'], 
  },
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'History' }],
  location: { type: String, trim: true }
});

const User = mongoose.model('User', UserSchema);

export default User;