const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/tunedUp");


module.exports = mongoose;