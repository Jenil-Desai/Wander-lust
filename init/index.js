require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./Data.js");
const Listing = require("../Models/listings.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected To DB");
  await fetchAndAddCoordinates();
  await initializeDatabase();
}

main().catch((err) => {
  console.log(err);
});

const initializeDatabase = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "your_user_object_id" }));
    await Listing.insertMany(initData.data);
    console.log("Data Was Initialized");
  } catch (error) {
    console.error("Error initializing the database:", error);
  }
};

// Function to fetch coordinates from MapBox Geocoding API
async function fetchCoordinates(location) {
  try {
    let response = await geocodingClient
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send();
    if (response.body.features && response.body.features.length > 0) {
      const geometry = response.body.features[0].geometry;
      return geometry;
    }
    throw new Error("Location not found");
  } catch (error) {
    console.error(`Error fetching coordinates for ${location}:`, error);
    return null;
  }
}

// Function to fetch and add coordinates to initData
const fetchAndAddCoordinates = async () => {
  for (let place of initData.data) {
    const geometry = await fetchCoordinates(place.location);
    place.geometry = geometry;
  }
};
