import mongoose from 'mongoose';

const CourseModuleSchema = mongoose.Schema({
  courses: [{}],
});

const CourseModule = mongoose.model('CourseModule', CourseModuleSchema);
export default CourseModule;