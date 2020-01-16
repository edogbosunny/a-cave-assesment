import express from 'express';
import queController from '../../controllers/que.controller';


const router = express.Router();

router.post('/que', queController.addQue);

export default router;
