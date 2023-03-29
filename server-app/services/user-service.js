import { UserModel } from "../models/User.js"

export async function getUsers() {
    return await UserModel.find().then((res) => { return res });
}