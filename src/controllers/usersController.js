const { User } = require("../service/index");
const { ctrlDecorator } = require("../decorators/index");
const {
  setPassword,
  validatePassword,
  HttpError,
} = require("../utilities/index");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  const encryptedPassword = setPassword(password);
  req.user = await User.create({ email, password: encryptedPassword });
  res.status(200).json({ message: "HIIII" });
};

const signIn = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(HttpError(403, "Email or password is wrong"));
  }

  if (!validatePassword(req.body.password, user.password)) {
    return next(HttpError(403, "Email or password is wrong"));
  }

  const { _id, email, createdAt, updatedAt, token } = user;

  res.status(200).json({ result: { _id, email, createdAt, updatedAt, token } });
};

module.exports = {
  signUp: ctrlDecorator(signUp),
  signIn: ctrlDecorator(signIn),
};
