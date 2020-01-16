import mongoose from 'mongoose';

const QueSchema = mongoose.Schema({
  phone_number: String,
  cron_runtime: Date,
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
