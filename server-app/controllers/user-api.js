import express from "express";
const Router = express.Router();

Router.get("/users", (req, res) => {
    console.log("GET - all Users query recieved");
    res.send("Users");
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