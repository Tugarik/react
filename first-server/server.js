const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());

app.get("/", (req, res) => {
  console.log("GET home huselt orj irlee");
  res.status(200).send("Home page");
});

app.get("/products", (req, res) => {
  console.log("GET products huselt orj irlee");
  res.status(200).send(products);
});

app.get("/users", (req, res) => {
  console.log("GET users huselt orj irlee");
  res.status(200).send("Users page");
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});

const products = [
  { name: "Sony", price: 250, stock: 15 },
  { name: "Canon", price: 200, stock: 10 },
];
