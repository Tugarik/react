import express from "express";
import { getCategories } from "../services/category-service.js";
const Router = express.Router();

Router.get("/categories", async (req, res) => {
    console.log("GET - all Categories query recieved");
    const result = await getCategories();
    res.send(result);
});

Router.post("/category/add", (req, res) => {
    console.log("POST - add Category query recieved");
    res.send("Add category");
});

Router.delete("/category/delete/:id", (req, res) => {
    console.log("DELETE - delete Category query recieved");
    res.send("Delete category");
});

export default Router;