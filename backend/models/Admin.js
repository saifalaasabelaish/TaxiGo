import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
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
    }
  });

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;
