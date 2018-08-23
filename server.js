'use strict'
require('dotenv').config();
require('./models/database_config');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')()); //
app.use(require('morgan')('combined'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);
const passport = require('./passport-init')(app);

app.get('/forbidden', (req,res) => {
  res.send(403, 'You are not authorized')
});

// Setup Routes
const protectedRoutes   = require('./routes/protected-routes');
//const apiRoutes         = require('./routes/api')(passport);
//const pubRoutes         = require('./routes/public-routes')(passport);

//app.use(pubRoutes);
//app.use(apiRoutes);
//make sure protectedRoutes is app.use'd after the public routes.
app.use(protectedRoutes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

