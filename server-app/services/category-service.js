import { CategoryModel } from "../models/Category.js"

export async function getCategories() {
    return await CategoryModel.find()
        .then((res) => { return res });
}