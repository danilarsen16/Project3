const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const listings = mongoose.model("listings", listingsSchema);

module.exports = listings;