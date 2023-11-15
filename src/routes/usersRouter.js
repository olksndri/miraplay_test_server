const express = require("express");

const { signUp, signIn } = require("../controllers/index");

const authRouter = express.Router();

authRouter.post("/signin", signIn);

authRouter.post("/signup", signUp);

module.exports = authRouter;
