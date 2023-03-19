import { ProductModel } from "../models/Product.js";


export async function getProducts() {
  return await ProductModel.find()
  .then((res) => {
    return res;
  });
}

export async function addProduct(props) {
  const newProduct = new ProductModel(props);
  const result = await newProduct.save();
return result;
}
