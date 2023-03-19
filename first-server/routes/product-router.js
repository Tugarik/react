
import express from "express";
import { addProduct, getProducts } from "../services/product-service.js";

const ProductsRouter = express.Router();

ProductsRouter .get("/products/test", async (req, res) => {
  const result = await getProducts();
  res.status(200).send(result);
});

ProductsRouter.post("/product/test", async (req, res) => {
  console.log("reqBody: ", req.body);  
  const result = await addProduct(req.body);
    res.status(200).send(result);
});

export default ProductsRouter;