const express = require('express');
const app = express();

app.get('/getme', (req, res) => {
  res.send(fruits)
});

app.post('/postme', (req, res) => {
  res.send({})
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

// MIDDLEWARE
// success: next()
// error: res.json({error: "You did wrong!"})

// 404 handler => kicks in if we did not found any matching route handler
app.use( (req, res, next) => {
  res.status(404).json({ error: `Route ${req.url} does not exist`})
})

app.get("/fuckup/saw-it-coming", (req, res, next) => {
  try {
    booh;
  } catch (err) {
    next(err);
  }
});

app.get("/fuckup/surprise", (req, res, next) => {
  throw new Error("<your error message>");
});
// GENERIC ERROR HANDLER MIDDLEWARE OF EXPRESS 
// - this will kick in on every error that our CODE produced! 
app.use( (err, req, res, next) => {
  // log the WHOLE ERROR information just to US INTERNALLY
  // including the line numbers where the error happened, so we can debug easily
  console.log(err)

  // this is the error response for our users
  res.status( err.code || 500 ).json({
    error: err.message // just send the message, without too much details
  })
})
//Run app, then load http://localhost:5000 in a browser to see the output.