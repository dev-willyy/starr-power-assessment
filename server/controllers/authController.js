import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { createError } from '../utilities/error.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

async function registerUser(req, res, next) {
  const { username, email, phoneNumber } = req.body;
  try {
    console.log(typeof phoneNumber);

    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { phoneNumber }],
    });

    if (existingUser) {
      const errors = {};

      if (existingUser.username === username) {
        errors.username = 'User with the same username already exists';
      }
      if (existingUser.email === email) {
        errors.email = 'User with the same email already exists';
      }
      if (Number(existingUser.phoneNumber) === Number(phoneNumber)) {
        errors.phoneNumber = 'User with the same phone number already exists';
      }

      console.log(errors);

      return next(createError(409, errors));
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send('User has been created');
  } catch (err) {
    next(err);
  }
}

async function loginUser(req, res, next) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return next(createError(404, 'Incorrect password or username!'));

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_TOKEN);

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
}

export { registerUser, loginUser };
