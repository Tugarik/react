import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
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
    collection: "categories",
  }
);

export const CategoryModel = mongoose.model(
  "Category",
  CategorySchema,
  "categories"
);
