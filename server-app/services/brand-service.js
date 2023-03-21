import {BrandModel} from "../models/Brand.js"

export async function getBrands() {
    return await BrandModel.find().then((res) => { return res });
}