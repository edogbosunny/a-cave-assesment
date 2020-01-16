import User from '../models/users-model';
import Que from '../models/que-model';

class UserAuthenticationRepository {
  static async signUp(payload) {

    try {
      const userResponse = await new User(payload);
      return userResponse.save();
    } catch (error) {
      console.log('error occurred while creating repository', error.message);
      return error;
    }
  }
  static async get(where) {
    try {
      const a = await User
        .find(where)

      console.log('aaa', a);
      return a;
    } catch (error) {
      console.log('error occured getting group posts', error.message);
      return error
    }
  };
}
export default UserAuthenticationRepository