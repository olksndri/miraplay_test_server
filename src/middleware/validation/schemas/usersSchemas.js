const Joi = require("joi");

const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const signUpSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Email is invalid",
  }),

  password: Joi.string()
    .pattern(passRegexp)
    .required()
    .messages({
      "string.pattern.base": `The password must contain at least one digit.
The password must contain at least one lowercase letter (from a to z).
The password must contain at least one capital letter (from A to Z).
The password must be at least 6 characters long.`,
    }),
});

const signInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Email is invalid",
  }),
  password: Joi.string().required(),
});

module.exports = { signUpSchema, signInSchema };
