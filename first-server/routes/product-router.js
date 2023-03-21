import express from "express";
import upload from "../multer/multerFile.js";
import { uploadFile } from "../services/image-service.js";

import { addProduct, getProducts } from "../services/product-service.js";

const ProductsRouter = express.Router();

ProductsRouter.get("/products/test", async (req, res) => {
  const result = await getProducts();
  res.status(200).send(result);
});

ProductsRouter.post(
  "/product/test",
  upload.single("file"),
  async (req, res) => {
    console.log("reqBody: ", req.body.data);
    const url = await uploadFile(req);
    console.log("cloudUrl: ", url);
    const result = await addProduct(req, url);
    res.status(200).send(result);
  }
);

// ProductsRouter.post(
//   "/product/test/file",
//   upload.single("file"),
//   async (req, res) => {
//     console.log("POST File orj irlee");
//     const url = await uploadFile(req);
//     console.log("routerRes: ", url.secure_url);
//   }
// );

export default ProductsRouter;
