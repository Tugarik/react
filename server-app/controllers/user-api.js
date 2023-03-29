import express from "express";
import { getUsers } from "../services/user-service.js";
const Router = express.Router();

Router.get("/users", async (req, res) => {
    console.log("GET - All Users query recieved");
    const result = await getUsers()
    res.send(result);
});

Router.post("/user/add", (req, res) => {
    console.log("POST - add User query recieved");
    res.send("Add User");
});

Router.delete("/user/delete/:id", (req, res) => {
    console.log("DELETE - delete User query recieved");
    res.send("Delete user");
});

export default Router;