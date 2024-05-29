import mongoose from 'mongoose';

const DriverSchema = new mongoose.Schema(
  {

    firstName:
    {
      type: String,
      required: true
    },
    lastName:
    {
      type: String,
      required: true
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
    location:

    {
      type: String

    },
    user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    history:
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'History'
      }],
    carBrand:
    {
      type: String,
      required: true
    }
  });

const Driver = mongoose.model('Driver', DriverSchema);

export default Driver;