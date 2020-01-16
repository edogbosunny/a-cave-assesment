import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_admin: {
    type: String,
    default: false,
  },
  country: {
    type: String,
    default: false,
  },
  queTable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QueCollection'
  },
  courseModuleTable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseModule'
  }
});

const User = mongoose.model('User', UserSchema);
export default User;
