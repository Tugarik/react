import mongoose from "mongoose";

const SpecObject = new mongoose.Schema({
  specKey: String,
  specValue: String,
});

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    spec: [],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    description: String,
    price: Number,
    stock: Number,
    sale: Number,
  },
  {
    collection: "products",
  }
);

export const ProductModel = mongoose.model(
  "Product",
  ProductSchema,
  "products"
);
