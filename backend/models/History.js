import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema(
    {

        createdAt:
        {
            type: Date, default: Date.now

        },
        driver:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Driver'
        },
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        location:
        {
            type: String
        }
    });

const History = mongoose.model('History', HistorySchema);

export default History;
