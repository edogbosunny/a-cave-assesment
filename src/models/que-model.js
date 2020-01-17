import mongoose from 'mongoose';

const QueSchema = mongoose.Schema({
  phone_number: String,
  time_preference: Date, // time that the cron should run
  course_link: String,
  module_title: String,
  course_title: String,
  status: {
    type: String,
    enum: ['new', 'completed'],
    default: 'new',
  }
});

const QueCollection = mongoose.model('QueCollection', QueSchema);
export default QueCollection;
// fully implement the cronjob