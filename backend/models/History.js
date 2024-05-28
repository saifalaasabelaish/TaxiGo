import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema(
    {

        createdAt:
        {
            type: Date, default: Date.now

        },
        destination:
        {
            type: String 
        },
        pickupLocation:
        {
            type: String
        },
        passengerCount:
        {
            type: String
        },
        additionalPreferences:
        {
            type: String
        }
    });

const History = mongoose.model('History', HistorySchema);

export default History;
