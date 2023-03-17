import mongoose from "mongoose";

const SpecObject = new mongoose.Schema({
  specKey: String,
  specValue: String,
});

const ProductSchema = new mongoose.Schema(
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
    spec: [SpecObject],
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
