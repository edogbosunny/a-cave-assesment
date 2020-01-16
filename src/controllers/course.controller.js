import CourseRepository from '../repositories/courses.repository';

const createCourse = async (req, res) => {
  try {
    const data = await CourseRepository.createCourse(req.body);
    if (data.length !== 0) {
      return res.status(200).send({
        message: 'course created successfully',
        data
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message: 'Internal server error',
      errors: data
    });
  }
}

const fetchAllCourse = async (req, res) => {
  try {
    const data = await CourseRepository.fetchAllCourses()
    return res.status(200).send({
      message: 'course retrived successfully',
      data
    })
  } catch (error) {
    return res.status(500).send({
      message: 'Internal server error',
      errors: data
    });
  }
}

const fetchSingleCourse = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).send({
        message: 'Invalid user Id',
        data
      })
    }
    const data = await CourseRepository.fetchCourseById(req.params.id);
    if (data.length === 0) {
      return res.status(404).send({
        message: 'Course does not exist',
        data
      })
    } else {
      return res.status(200).send({
        message: 'course retrived successfully',
        data
      })
    }
  } catch (error) {

  }
}

export default {
  createCourse,
  fetchAllCourse,
  fetchSingleCourse
}