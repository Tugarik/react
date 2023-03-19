import express from "express";
import { addCategory, getCategories } from "../services/category-service.js";

const CategoryRouter = express.Router();

CategoryRouter.get("/categories/test", async (req, res) => {
  const result = await getCategories();
  res.status(200).send(result);
});

CategoryRouter.post("/category/test", async (req, res) => {
    console.log("reqBody: ", req.body);
    const result = await addCategory(req.body);
    res.status(200).send(result);
});

export default CategoryRouter;