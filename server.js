const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();
const { DB_URI, PORT } = process.env;

const main = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Conected to DB`);
    app.listen(PORT);
    console.log(`Start listening on port ${PORT}`);
  } catch (e) {
    console.log(e);
  }
};

main();
