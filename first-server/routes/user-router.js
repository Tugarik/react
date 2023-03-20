import express from "express";
import { addUser, getUsers } from "../services/user-service.js";

const UsersRouter = express.Router();

UsersRouter.get("/users/test", async (req, res) => {
  const result = await getUsers();
  res.status(200).send(result);
});

UsersRouter.post("/user/test", async (req, res) => {
  console.log("reqBody: ", req.body);
  const result = await addUser(req.body);
  res.status(200).send(result);
});

export default UsersRouter;
