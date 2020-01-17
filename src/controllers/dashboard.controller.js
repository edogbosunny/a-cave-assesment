import UserPreferenceRepository from "../repositories/user-preference.repository"
import jwtDecode from 'jwt-decode';
// import DashboardRepository from '../repositories/dashboard.repository';

const addToQue = async (req, res) => {
  var decoded = jwtDecode(JSON.stringify(req.headers.token));
  try {
    const data = await UserPreferenceRepository.createPreference(decoded.userId, req.body)
    if (data.day_preference === null || data.day_preference === undefined) {
      return res.status(404).send({
        message: 'somthing went wrong',
      })
    } else {

      return res.status(200).send({
        message: 'preference saved successfully',
        data
      })
    }

  } catch (error) {
    console.log('somthing went wrong')
    return res.status(500).send({
      message: 'Something went really wrong',
      error
    })
  }






  // try {
  //   const data = await DashboardRepository.createQue({ phoneNumber: '123' }, req.body);
  //   console.log('data don show--->', data);

  // } catch (error) {
  //   console.log(error)
  //   return res.status(500).send({
  //     message: 'Internal server error',
  //     errors: data.errors
  //   });
  // }
}

export default {
  addToQue
}