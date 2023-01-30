let products = require("./products.json");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

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
  res.send(products);
});

app.post("/products", (req, res) => {
  console.log("POST products huselt orj irlee");
  products.unshift(req.body);
  // res.send(products);
});

app.delete("/products/:id", (req, res) => {
  console.log("DELETE products huselt orj irlee");
  const id = req.params.id;
  const filtered = products.filter((product) => product.id !== id);
  products = filtered;
});

app.put("/products/:id", (req, res) => {
  console.log("PUT products huselt orj irlee");
  const { id } = req.params;
  const edited = products.filter((product) => product.id !== id);
  edited.unshift(req.body);
  products = edited;
});

app.get("/users", (req, res) => {
  console.log("GET users huselt orj irlee");
  res.status(200).send("Users page");
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}
