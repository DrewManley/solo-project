const express = require('express');
const app = express();
const port = 3000;
const testRoute = require('./routes/test');

// don't forget to come back and change route name to something real above and below
app.use('./api/test', testRoute);

// general get request to check for working
app.get('/api', (req, res) => {
  res.send('express is working');
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

/**
 * configure express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

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
