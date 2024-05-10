import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(

  {
    firstName:
    {
      type: String,
      required: true
    },
    lastName:
    {
      type: String
      , required: true
    },
    email:
    {
      type: String,
      unique: true,
      required: true
    },
    password:
    {
      type: String,
      required: true
    },
    mobileNumber:
    {
      type: String,
      required: true
    },
    createdAt:
    {
      type: Date,
      default: Date.now
    },
    dateOfBirth:
    {
      type: Date,
      required: true
    },
    gender:
    {
      type: String,
      required: true
    },
    history:
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'History'
      }],
    location:
    {
      type: String
    }
  });

const User = mongoose.model('User', UserSchema);

export default User;
