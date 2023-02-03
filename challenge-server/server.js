const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 5001;
app.use(cors());

app.get("/", (req, res) => {
  console.log("GET request recieved");
  res.status(200).send("Express Server Home");
});

app.get("/pages", (req, res) => {
  console.log("GET request recieved");
  fs.readFile("./data.json", (err, data) => {
    let savedData = JSON.parse(data);
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.status(200).send(savedData);
    }
  });
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
