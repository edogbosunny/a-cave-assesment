import express from 'express';
import dashboardController from '../../controllers/dashboard.controller';


const router = express.Router();

router.post('/add-course-to-que', dashboardController.addToQue);

export default router;
