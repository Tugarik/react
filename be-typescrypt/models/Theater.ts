import mongoose, { Schema } from "mongoose";

const theaterSchema = new mongoose.Schema({
  theaterId: Number,
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: {
      type: String,
      coordinates: [Number],
    },
  },
});

theaterSchema.index({ "geo.coord": "2dsphere" });
const Theater = mongoose.model("Theater", theaterSchema);
export default Theater;
