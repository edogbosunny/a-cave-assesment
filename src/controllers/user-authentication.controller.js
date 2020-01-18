import bcrypt from 'bcrypt';
import getToken from '../utils/lib/get-token';

import UserAuthenticationRepository from '../repositories/user-authentication.repository';
import validateSignupInput from '../utils/validation/sign-up.validation'

const signupUser = async (req, res) => {
  const { password, first_name, last_name, phone_number, is_admin, country } = req.body;
  const genSalt = bcrypt.genSaltSync(8);
  const hashPassword = bcrypt.hashSync(password, genSalt);

  const updatedUserResponse = {
    first_name,
    last_name,
    phone_number,
    password: hashPassword,
    is_admin,
    country,
  }


  const { errors, isValid } = validateSignupInput(updatedUserResponse);
  const checkExistingUser = await UserAuthenticationRepository.get({ phone_number });
  const data = await UserAuthenticationRepository.signUp(updatedUserResponse)
  try {
    const token = getToken(data._id, is_admin);
    if (isValid) {
      if (checkExistingUser.length !== 0) {
        return res.status(409).send({
          message: 'User already exists',
        });
      }
      return res.status(200).send({
        message: 'User created successfully',
        token
        // data,
      });
    }
    else {
      return res.status(400).send({
        message: 'User creation failed. please check fields entered',
        errors: errors
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: 'Internal server error',
      errors: data.errors
    });
  }

};

export default {
  signupUser,
};
