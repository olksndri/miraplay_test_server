const bCrypt = require("bcryptjs");

const setPassword = (password) => {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

const validatePassword = (password, encryptedPassword) => {
  return bCrypt.compareSync(password, encryptedPassword);
};

module.exports = {
  setPassword,
  validatePassword,
};
