import express from "express";
import multer from "multer";
import { nanoid } from "nanoid";
import { addProduct, getProducts } from "../services/product-service.js";

const ProductsRouter = express.Router();

ProductsRouter.get("/products/test", async (req, res) => {
  const result = await getProducts();
  res.status(200).send(result);
});

ProductsRouter.post("/product/test", async (req, res) => {
  console.log("reqBody: ", req.body);
  const result = await addProduct(req.body);
  res.status(200).send(result);
});

//file upload
// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = getExtensions(file.originalname);
    const newFileName = nanoid() + "." + ext;
    console.log("newFileName: ", newFileName);
    cb(null, newFileName);
  },
});

function getExtensions(name) {
  const arr = name.split(".");
  return arr[arr.length - 1];
}

const upload = multer({ storage: storage });

ProductsRouter.post(
  "/product/test/file",
  upload.single("file"),
  function (req, res) {
    console.log(req.file);
  }
);

export default ProductsRouter;
