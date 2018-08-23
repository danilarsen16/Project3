// Require mongoose
var mongoose = require("mongoose");
const findOrCreate = require('mongoose-find-or-create')

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  
  googleid: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  username: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  genres: {
    type: Array
  },
  instruments: {
    type: Array
  },
  zip: {
    type: String
  },
  bio: {
    type: String
  },
  links: {
    type: Array
  }
});
UserSchema.plugin(findOrCreate)

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);


// User.prototype.validPassword = function(password) {
  
//   console.log("Password from the DB:" , this.password)
//   console.log("Password from the Client :" , password)
//   return (this.password === password)
// }

// Syncs with DB
//User.sync();

// Export the Example model
module.exports = User;