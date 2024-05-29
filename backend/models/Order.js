import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    pickup:
    {
      type: String,
      required: true
    },
    destination:
    {
      type: String,
     required: true
    },
    passengercount:
    {
      type: Number,
      required: true,
      max: 10,
    },
    preferences:
    {
      type: String,
    },
    type:
    {
        type: String
    },
    createdAt:
    {
      type: Date,
      default: Date.now
    }
  });

const Order = mongoose.model('Order', OrderSchema);

export default Order;