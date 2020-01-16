import express from 'express';
import courseController from '../../controllers/course.controller';


const router = express.Router();

router.post('/create-course', courseController.createCourse);
router.get('/fetch-course', courseController.fetchAllCourse);
router.get('/fetch-course/:id', courseController.fetchSingleCourse);

export default router;
