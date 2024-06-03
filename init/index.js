const mongoose = require("mongoose");
const initData = require("./Data.js");
const Listing = require("../Models/listings.js");
require("dotenv").config();

main()
  .then(() => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data Was Initialized");
};

initDB();
