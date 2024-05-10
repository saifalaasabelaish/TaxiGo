import mongoose from 'mongoose';

const TaxiStandSchema = new mongoose.Schema(
  {
    Name:
    {
      type: String,
      required: true
    },
    email:
    {
      type: String,
      unique: true, required: true
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
    }
  });

const TaxiStand = mongoose.model('TaxiStand', TaxiStandSchema);

export default TaxiStand;
