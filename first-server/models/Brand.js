import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "brands",
  }
);

export const BrandModel = mongoose.model("Brand", BrandSchema, "brands");
