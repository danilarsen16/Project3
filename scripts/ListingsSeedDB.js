const mongoose = require("mongoose");
const db = require ("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongod://localhost/listings"
);

const listingSeed = [
    {
        title: "Need Banjo Lessons",
        description: "Experienced saxophone player wanting to learn how to play the banjo.",
        username: "DukeSilver"

    },
    {
        title: "Musicians Needed",
        description: "Looking to start a jam band. Looking for percussionists and additional guitars.",
        username: "GuitarGuy"
    },
    {
        title: "Grammy Winner wants to recruit for a new group.",
        description: "I wants to create a new pop group. Auditions will be held at the University of Minnesota on September 1st.",
        username: "AliciaKeys"
    },
    {
        title: "Dueling Pianos",
        description: "Starting a dueling pianos ensemble to travel around the midwest. Contact me if interested.",
        username: "Piano1234"
    },
    {
        title: "Musicians needed for Musical",
        description: "Looking for piano players, guitar players and violin players for a summer musical. Audtions next Sunday.",
        username: "DukeSilver"
    },
    {
        title: "Coffee Shop Jam Band",
        description: "Looking to jam at a coffee shop in St. Paul. Acoustic Guitar, cello and violin players wanted.",
        username: "ClassyClassical"
    },
];


db.Listing
  .remove({})
  .then(() => db.User.collection.insertMany(listingSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
