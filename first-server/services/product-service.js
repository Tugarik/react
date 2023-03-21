import { ProductModel } from "../models/Product.js";

export async function getProducts() {
  return await ProductModel.find().then((res) => {
    return res;
  });
}

export async function addProduct({ req, url }) {
  console.log("body: ", req.body);
  console.log("url: ", url);

  const newBody = { ...JSON.parse(req.body.details), image: url };
  console.log("newBody: ", newBody);
  // const newProduct = new ProductModel(newBody);
  // const result = await newProduct.save();
  // return result;
}
