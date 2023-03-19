import { UserModel } from "../models/User.js";


export async function getUsers() {
  
  const result = await UserModel.find();
  return result;
}

export async function addUser(props) {
    const newUser = new UserModel(props);
    const result = await newUser.save();
  return result;
}
