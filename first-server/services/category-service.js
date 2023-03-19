import { CategoryModel } from "../models/Category.js";


export async function getCategories() {
  const result = await CategoryModel.find().then((res) => {
    return res;
  });
  return result;
}

export async function addCategory(props) {
    const newCategory = new CategoryModel(props);
    const result = await newCategory.save();
  return result;
}
