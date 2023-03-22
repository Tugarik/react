import express from "express";
import cors from "cors";
import mongoDBConfig from "./config/mongoDB.js";
import UserApi from "./controllers/user-api.js";
import BrandApi from "./controllers/brand-api.js";
import ProductApi from "./controllers/product-api.js";
import CategoryApi from "./controllers/category-api.js";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use(ProductApi);
app.use(UserApi);
app.use(BrandApi);
app.use(CategoryApi);

app.listen(PORT, () => {
  mongoDBConfig;
  console.log(`Server started at port: ${PORT}`);
});
