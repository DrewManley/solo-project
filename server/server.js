const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const port = 1313;
const testRouter = require('./routes/test');
const docsRouter = require('./routes/record');
// const dotenv = require('dotenv').config()
// const gatherController = require('./controllers/gatherController')
// const mongoURI = 'http://localhost:27017'
// mongoose.connect(mongoURI);

// mongoose.connect('mongodb://localhost:27017/Recipe-Base')

// need to parse and encode incoming requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/test', testRouter);

app.use(logger('dev'));

// general get request to check for working
app.get('/api', (req, res) => {
  res.send('express is working');
});

app.use('/', (req, res) => {
  res.send('This is root value');
})
// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  // error object that we can put debugging methods in. They can be anything we choose, these are common ones
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  // Use the Object.assign method to create a new object based on defaultErr and modified with err param
  const errorObj = Object.assign(defaultErr, err);

  // console.log errorObj so we can see it
  console.log(errorObj.log());

  // return our status and message values
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(port, console.log('express connected to server'));
module.exports = app;
