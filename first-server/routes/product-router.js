import express from "express";
import { getProducts } from "../services/product-service.js";

const ProductRouter = express.Router();

ProductRouter.get("/products/test", (req, res) => {
  console.log("GET - Products huselt orj irlee");
  const result = getProducts();

  res.status(200).send(result);
});

export default ProductRouter;
