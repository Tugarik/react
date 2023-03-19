import express from "express";
import { addBrand, getBrands } from "../services/brand-service.js";

const BrandRouter = express.Router();

BrandRouter.get("/brands/test", async (req, res) => {
  const result = await getBrands();
  res.status(200).send(result);
});

BrandRouter.post("/brand/test", async (req, res) => {
    console.log("reqBody: ", req.body);
    const result = await addBrand(req.body);
    res.status(200).send(result);
});

export default BrandRouter;