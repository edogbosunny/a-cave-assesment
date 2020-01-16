import User from '../models/users-model';
import Que from '../models/que-model';

class DashboardRepository {
  static async createQue(where, payload) {

    try {
      const queData = await new Que(payload);
      const findByUniqueId = await User.findOne(where).populate('queTable')
      queData.save();
      return findByUniqueId;
    } catch (error) {
      console.log('error occurred while creating repository', error.message);
      return error;
    }
  }
  // static async get(where) {
  //   try {
  //     const a = await User
  //       .find(where)

  //     console.log('aaa', a);
  //     return a;
  //   } catch (error) {
  //     console.log('error occured getting group posts', error.message);
  //     return error
  //   }
  // };
}
export default DashboardRepository;