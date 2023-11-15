const { HttpError } = require("../utilities/index");

const ctrlDecorator = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (e) {
      console.log(e);
      next(HttpError(500));
    }
  };

  return func;
};

module.exports = ctrlDecorator;
