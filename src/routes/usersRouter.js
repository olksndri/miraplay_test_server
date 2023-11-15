const express = require("express");

const { auth, signUpValidate, signInValidate } = require("../middleware/index");
const { signUp, signIn, getAuth } = require("../controllers/index");

const authRouter = express.Router();

authRouter.get("/", auth, getAuth);

authRouter.post("/signup", signUpValidate, signUp);

authRouter.post("/signin", signInValidate, signIn);

module.exports = authRouter;
