let products = require("./database/products.json");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

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
  fs.readFile("./database/products.json", (err, data) => {
    let savedData = JSON.parse(data);
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.status(200).send(savedData);
    }
  });
});

app.post("/products", (req, res) => {
  console.log("POST products huselt orj irlee");
  fs.readFile("./database/products.json", (err, data) => {
    let savedData = JSON.parse(data);
    if (err) {
      res.status(500).send({ message: err });
    } else {
      savedData.unshift(req.body);
      fs.writeFile(
        "./database/products.json",
        JSON.stringify(savedData),
        (err) => {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            res.status(200).send({ message: "Data successfully updated" });
          }
        }
      );
    }
  });
});

app.delete("/products/:id", (req, res) => {
  console.log("DELETE products huselt orj irlee");
  fs.readFile("./database/products.json", (err, data) => {
    let savedData = JSON.parse(data);
    console.log("read success:");
    if (err) {
      res.status(500).send({ message: err });
    } else {
      const id = req.params.id;
      const filtered = savedData.filter((product) => product.id !== id);
      console.log("filter success");
      fs.writeFile(
        "./database/products.json",
        JSON.stringify(filtered),
        (err) => {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            res.status(200).send({ success: true, data: filtered });
          }
        }
      );
    }
  });
});

app.put("/products/:id", (req, res) => {
  console.log("PUT products huselt orj irlee");
  fs.readFile("./database/products.json", (err, data) => {
    let savedData = JSON.parse(data);
    if (err) {
      res.status(500).send({ message: err });
    } else {
      const { id } = req.params;
      const edited = savedData.filter((product) => product.id !== id);
      edited.unshift(req.body);
      fs.writeFile(
        "./database/products.json",
        JSON.stringify(edited),
        (err) => {
          if (err) {
            res.status(500).send({ message: err });
          } else {
            res.status(200).send({ message: "Data successfully edited" });
          }
        }
      );
    }
  });
});

app.get("/users", (req, res) => {
  console.log("GET users huselt orj irlee");
  res.status(200).send("Users page");
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});
