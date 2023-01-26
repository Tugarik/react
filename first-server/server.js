const products = require("./products.json");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("GET home huselt orj irlee");
  res.status(200).send("Home page");
});

app.get("/products", (req, res) => {
  console.log("GET products huselt orj irlee");
  res.setHeader("Content-Type", "application/json");
  res.json(products);
});

app.get("/users", (req, res) => {
  console.log("GET users huselt orj irlee");
  res.status(200).send("users page");
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});
