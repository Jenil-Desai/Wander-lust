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
  await mongoose.connect("mongodb://127.0.0.1:27017/wandurlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "6667df73d08510bf415936f4" }));
  await Listing.insertMany(initData.data);
  console.log("Data Was Initialized");
};

initDB();
