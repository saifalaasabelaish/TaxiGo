import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

// Pre-save hook to hash the password
AdminSchema.pre('save', function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // Hash the password using the generated salt
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      this.password = hash;
      next();
    });
  });
});

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;