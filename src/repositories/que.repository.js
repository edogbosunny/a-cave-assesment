import QueModel from '../models/que-model';

class QueRepository {

  static async createQue(payload) {

    try {
      return await new QueModel(payload).save();

    } catch (error) {
      console.log('error occurred while creating que', error.message);
      return error;
    }
  }


  static async fetchAllQues() {
    try {
      const a = await QueModel
        .find()
      console.log('aaa', a);
      return a;
    } catch (error) {
      console.log('error occured fetching que', error.message);
      return error
    }
  };
}

export default QueRepository;