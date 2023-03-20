import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    createdOn: {
      type: Date,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    collection: "users",
  }
);

export const UserModel = mongoose.model("User", UserSchema, "users");
