import UsersPreference from "../models/users-preference.model";
import User from '../models/users-model';
import Que from '../models/que-model';
import CourseModuleRepository from './courses.repository';


class UserPreferenceRepository {

  static async createPreference(userId, payload) {
    try {
      const coursesData = await CourseModuleRepository
        .fetchCourseById(payload.course_preference);

      const userData = await User.findById(userId);

      const preferenceQuePayload = {
        course_preference: payload.course_preference,
        day_preference: payload.day_preference,
        time_preference: payload.time_preference,
        time_interval: payload.time_interval,
        phone_number: userData.phone_number
      }
      // console.log('courseData---->', preferenceQuePayload);

      const mappedPreferenceData = coursesData.courses.map(response => {

        const preferenceQuePayload = {
          course_preference: payload.course_preference,
          day_preference: payload.day_preference,
          time_preference: payload.time_preference,
          time_interval: payload.time_interval,
          phone_number: userData.phone_number,
          course_link: response.url,
          course_title: response.courseTitle,
          module_title: response.moduleTitle
        }

        console.log('---->', preferenceQuePayload)
        // wip. flesh out chrone calculations
      })

      const createQue = await new Que(payload);

      const userPreferenceData = await new UsersPreference(payload);
      userPreferenceData.save();
      return userPreferenceData;
    } catch (error) {
      console.log('error occurred while saving user preference', error.message);
      return error;
    }
  }
}

export default UserPreferenceRepository