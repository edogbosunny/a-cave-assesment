
import CourseModule from '../models/course-modules';


class CourseModuleRepository {
  static async createCourse(payload) {

    try {
      const courseData = await new CourseModule(payload);
      courseData.save();
      return courseData;
    } catch (error) {
      console.log('error occurred while saving course', error.message);
      return error;
    }
  }
  static async fetchAllCourses() {
    try {
      const courseData = await CourseModule.find();
      return courseData;
    } catch (error) {
      console.log('error occurred while fetching all course', error.message);
    }
  }

  static async fetchCourseById(payload) {
    try {
      const courseData = await CourseModule.findById(payload);
      return courseData;
    } catch (error) {
      console.log('error occurred while fetching required course', error.message);
    }
  }
}
export default CourseModuleRepository;
