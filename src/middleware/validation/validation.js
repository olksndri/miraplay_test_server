const { signUpSchema, signInSchema } = require("./schemas/usersSchemas");
const { validateBody } = require("../../decorators/index");

const signUpValidate = validateBody(signUpSchema);
const signInValidate = validateBody(signInSchema);

module.exports = { signUpValidate, signInValidate };
