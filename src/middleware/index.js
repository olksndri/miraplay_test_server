const { signUpValidate, signInValidate } = require("./validation/validation");
const auth = require("./auth");

module.exports = { auth, signUpValidate, signInValidate };
