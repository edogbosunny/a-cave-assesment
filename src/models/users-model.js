import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  password: String,
  userRole: Boolean,
});

const User = mongoose.model('users', UserSchema);
export default User;
