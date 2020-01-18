
import QueRepository from '../repositories/que.repository';

// const { metadata, status, time_to_send } = req.body;

const addQue = async (req, res) => {
  try {
    const data = await QueRepository.createQue(req.body)


  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message: 'Internal server error',
      errors: data.errors
    });
  }
}

const fetchAllQues = async (req, res) => {

}
export default {
  addQue,
  fetchAllQues
}