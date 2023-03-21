import express from "express";
import upload from "../middleware/multer.js";
import { addProduct, getProducts } from "../services/product-service.js";
const Router = express.Router();

Router.get("/products", async (req, res) => {
    console.log("GET - all products query recieved");
    const result = await getProducts();
    res.status(200).send(result);
});

Router.post("/product/add", upload.single("file"), async (req, res) => {
    console.log("POST - add product query recieved");
    const result = await addProduct(req);
    res.status(201).send(result);
});

Router.delete("/product/delete/:id", (req, res) => {
    console.log("DELETE - delete query recieved");
    res.send("Add Product");
});

export default Router;
