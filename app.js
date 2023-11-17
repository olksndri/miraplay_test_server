const express = require('express');
const cors = require('cors');
const passport = require('passport');

const { authRouter } = require('./src/routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRouter);

app.use('/health-check', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Internal server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
