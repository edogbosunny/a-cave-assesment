import mongoose from 'mongoose';

const UsersPreferenceSchema = mongoose.Schema({
  course_preference: String, // course id
  day_preference: {
    type: String,
    enum: ['monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'weekends', 'monday-friday'],
    default: 'monday-friday'
  },
  time_preference: Date,
  time_interval: String,
}, { timestamps: true });

const UsersPreference = mongoose.model('UsersPreference', UsersPreferenceSchema);
export default UsersPreference;
