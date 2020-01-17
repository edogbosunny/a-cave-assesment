import mongoose from 'mongoose';

const UsersPreferenceSchema = mongoose.Schema({
  course_preference: String, // course id
  day_preference: [], // day preference
  time_preference: Date,  // time of the day to send the message
  time_interval: String, // how many times you want to recieve it
}, { timestamps: true });

const UsersPreference = mongoose.model('UsersPreference', UsersPreferenceSchema);
export default UsersPreference;
