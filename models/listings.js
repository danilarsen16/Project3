const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now },
  _id: { type: String, required: true}
});

const listings = mongoose.model("listings", listingsSchema);

module.exports = listings;