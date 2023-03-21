import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: "categories",
    },

    brand: {
        type: Schema.Types.ObjectId,
        ref: "brands",
    },
    description: String,
    price: Number,
    stock: Number,
    sale: {
        type: Number,
        min: 0,
        max: 99
    },

})

export const ProductModel = mongoose.model("products", ProductSchema);