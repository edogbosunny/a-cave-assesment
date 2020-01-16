import express from 'express';

import UserAuthentificationController from '../../controllers/user-authentication.controller';

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ msg: 'post Works' });
});
router.post('/signup', UserAuthentificationController.signupUser);

export default router;
