import UsersPreference from "../models/users-preference.model";
import User from '../models/users-model';
import Que from '../models/que-model';
import { sendSmS } from '../utils/lib/twillo-helper';
import CourseModuleRepository from './courses.repository';
import DateHelper from '../utils/lib/date-helpers';
import moment from 'moment';



class UserPreferenceRepository {

  static async createPreference(userId, payload) {

    try {

      const coursesData = await CourseModuleRepository
        .fetchCourseById(payload.course_preference);

      const endDate = await DateHelper.getAddedDate(coursesData.courses.length);
      const dateRange = await DateHelper.getRange(moment().format("YYYY-MM-DD"), endDate)
      // console.log(moment().format("YYYY-MM-DD"))
      // console.log(GetTimezone);


      const userData = await User.findById(userId);
      const hourDifference = DateHelper.getTimeZone(userData.country)


      const mappedPreferenceData = await coursesData.courses.map((response, index) => {
        const num2 = dateRange[index];
        const preferenceQuePayload = {
          course_preference: payload.course_preference,
          day_preference: payload.day_preference,
          time_preference: moment(payload.time_preference).add(hourDifference, 'hours'),
          time_interval: payload.time_interval,
          phone_number: userData.phone_number,
          course_link: response.url,
          course_title: response.courseTitle,
          module_title: response.moduleTitle,
          date: num2
        }
        const createQue = new Que(preferenceQuePayload);
        createQue.save();
        const twilloPayload = {
          to: userData.phone_number,
          body: response.moduleTitle
        }
        sendSmS(twilloPayload);
        // allMapped.push(createQue.save());
        return preferenceQuePayload;
        // wip. flesh out chrone calculations
      })

      // await Promise.all(allMapped);
      const userPreferenceData = await new UsersPreference(payload);
      userPreferenceData.save();
      return userPreferenceData;
    } catch (error) {
      console.log('error occurred while saving user preference', error);
      return error;
    }
  }
}

export default UserPreferenceRepository
