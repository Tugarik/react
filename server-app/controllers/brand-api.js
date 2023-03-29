import express from "express";
import { getBrands } from "../services/brand-service.js";
const Router = express.Router();

Router.get("/brands", async (req, res) => {
    console.log("GET - all Brands query recieved");
    const result = await getBrands();
    res.send(result);
});

Router.post("/brand/add", (req, res) => {
    console.log("POST - add Brand query recieved");
    res.send("Add a brand");
});

Router.delete("/brand/delete/:id", (req, res) => {
    console.log("DELETE - delete Brand query recieved");
    res.send("Delete a brand");
});

export default Router;