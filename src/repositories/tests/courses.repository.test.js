import mongoose from 'mongoose'
import { dbConfig } from '../../config/keys';
import CourseModule from '../../models/course-modules';
import mock from '../../utils/mocks/mocks';


describe('Course Repository test', () => {
  beforeAll(async () => {
    // refactor connection much later
    await mongoose.connect(dbConfig(), { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });
  let courseId;
  it('should create a course', async () => {
    const createCourse = new CourseModule(mock.coursePayload)
    const savedCourse = await createCourse.save();
    expect(savedCourse.courses[0].url).toBe('http://example1.com')
    expect(savedCourse.courses[0].moduleTitle).toBeDefined();
  })

  it('should find all course', async () => {
    const courseData = await CourseModule.find();
    expect(courseData.courses).toBeDefined;
    expect(courseData[0]._id).toBeDefined;
    courseId = courseData[0]._id;
  })

  it('should find a course by id', async () => {
    const courseData = await CourseModule.findById(courseId);
    expect(courseData.courses[0].moduleNumber).toBe('1')
    expect(courseData.courses[0].url).toBe('http://example1.com')
  })

})
