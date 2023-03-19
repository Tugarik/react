import { BrandModel } from "../models/Brand.js";


export async function getBrands() {
  const result = await BrandModel.find().then((res) => {
    return res;
  });
  return result;
}

export async function addBrand(props) {
    const newBrand = new BrandModel(props);
    const result = await newBrand.save();
  return result;
}
