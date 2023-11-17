const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../service/index');
const { ctrlDecorator } = require('../decorators/index');
const {
  setPassword,
  validatePassword,
  HttpError,
} = require('../utilities/index');

const { JWT_SECRET } = process.env;

const signUp = async (req, res, next) => {
  const { email, password } = req.body;

  const isEmailExists = await User.findOne({ email });

  if (isEmailExists) {
    return next(HttpError(400, 'User with such email already exists'));
  }

  const encryptedPassword = setPassword(password);

  const { _id, createdAt, updatedAt } = await User.create({
    email,
    password: encryptedPassword,
  });

  const token = jwt.sign({ _id }, JWT_SECRET, {
    expiresIn: '23h',
  });

  await User.findByIdAndUpdate(_id, { token });

  res.status(201).json({ user: { email, _id, createdAt, updatedAt }, token });
};

const signIn = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(HttpError(403, 'Email or password is wrong'));
  }

  if (!validatePassword(req.body.password, user.password)) {
    return next(HttpError(403, 'Email or password is wrong'));
  }

  const { _id, email, createdAt, updatedAt } = user;

  const token = jwt.sign({ _id }, JWT_SECRET, {
    expiresIn: '23h',
  });
  await User.findOneAndUpdate({ email }, { token });

  res.status(200).json({ user: { _id, email, createdAt, updatedAt }, token });
};

const getAuth = async (req, res, next) => {
  const { _id, email, createdAt, updatedAt } = req.user;

  res.status(200).json({ user: { _id, email, createdAt, updatedAt } });
};

module.exports = {
  signUp: ctrlDecorator(signUp),
  signIn: ctrlDecorator(signIn),
  getAuth: ctrlDecorator(getAuth),
};
