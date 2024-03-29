import { ProductModel } from "../models/Product.js";
import cloudinary from "../config/cloudinary.js";

export async function getProducts() {
  return await ProductModel.find()
    .populate('category')
    .populate('brand')
    .then((res) => { return res });
}

export async function addProduct(req) {
  const reqData = JSON.parse(req.body.data);
  await cloudinary.uploader.upload(req.file.path, {
    use_filename: true,
    folder: 'electon'
  }).then((data) => {
    const path = data.secure_url;
    const newData = { ...reqData, image: path };
    const newProduct = new ProductModel(newData);
    const result = newProduct.save();
    return result;
  })
    .catch((err) => {
      return err;
    });

}
