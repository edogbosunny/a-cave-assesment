import jwt from 'jsonwebtoken';

const getToken = (userId, role) => jwt.sign(
  {
    userId,
    role
  },
  process.env.TOKEN_SECRET,
  {
    expiresIn: 86400
  }
);

export default getToken;