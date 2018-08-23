const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const listing = mongoose.model("listing", listingSchema);

module.exports = listing;