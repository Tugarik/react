// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const { credentialValidation } = require("./validations/auth.js");
// const { validationResult } = require("express-validator");
// const UserModel = require('./models/User.js');
// const mongoose = require("mongoose");

import express from "express";
import cors from"cors";
import fs from"fs";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { credentialValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from './models/User.js';
import mongoose from "mongoose";

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("GET home huselt orj irlee");
  res.status(200).send("Home page");
});

// user login from shop
app.post("/auth/login", credentialValidation, async (req, res) => {
  console.log("PUT check user hiih medeelel irlee1");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).send(errors.array());
  }
  try {
    fs.readFile("./database/users.json", async (err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        let savedData = JSON.parse(data);
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        // const token = jwt.sign({_id: user._id},'secret123', {expiresIn: '1d'});
        savedData.filter((el) => el.userName == req.body.userName || el.passwordHash == passwordHash).length &&
        res.status(200).send({ success: true });   
      }
    });
  } catch(error) {
      res.status(401).send({ success: false });
  }
});

// user registration from shop
app.post("/auth/register", credentialValidation,  async (req, res) => {
  
  console.log("PUT register user hiih medeelel irlee");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }

  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
  userName: req.body.userName,
  passwordHash,
  });
  
  fs.readFile("./database/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let savedData = JSON.parse(data);
      savedData.filter((el) => el.userName == req.body.userName).length
        ? res.status(401).send({ success: false })
        : fs.writeFile(
            "./database/users.json",
            JSON.stringify([...savedData, newUser]),
            (err) => {
              err
                ? res.status(500).send({ message: err })
                : res.status(200).send({ success: true });
            }
          );
    }
  });
});



// products
app.get("/products", (req, res) => {
  console.log("GET - Products huselt orj irlee");
  fs.readFile("./database/products.json", (err, data) => {
    let savedData = JSON.parse(data);
    err
      ? res.status(500).send({ message: err })
      : res.status(200).send(savedData);
  });
});

app.post("/products", (req, res) => {
  console.log("POST - Products huselt orj irlee");
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
  console.log("DELETE - Products huselt orj irlee");
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
  console.log("PUT - Products huselt orj irlee");
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
          err
            ? res.status(500).send({ message: err })
            : res.status(200).send({ message: "Data successfully edited" });
        }
      );
    }
  });
});


// Users from dashboard
app.get("/users", (req, res) => {
  console.log("GET - Users huselt orj irlee");
  fs.readFile("./database/users.json", (err, data) => {
    err
      ? res.status(500).send({ message: err })
      : res.status(200).send(JSON.parse(data));
  });
});

app.post("/users", (req, res) => {
  console.log("POST - Users huselt orj irlee");
  fs.readFile("./database/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let savedData = JSON.parse(data);
      savedData.unshift(req.body);
      fs.writeFile(
        "./database/users.json",
        JSON.stringify(savedData),
        (err) => {
          err
            ? res.status(500).send({ message: err })
            : res.status(200).send({ message: "Data successfully updated" });
        }
      );
    }
  });
});

app.delete("/users/:id", (req, res) => {
  console.log("DELETE - Users huselt orj irlee");
  fs.readFile("./database/users.json", (err, data) => {
    let savedData = JSON.parse(data);
    console.log("read success:");
    if (err) {
      res.status(500).send({ message: err });
    } else {
      const id = req.params.id;
      const filtered = savedData.filter((product) => product.id !== id);
      console.log("filter success");
      fs.writeFile("./database/users.json", JSON.stringify(filtered), (err) => {
        err
          ? res.status(500).send({ message: err })
          : res.status(200).send({ success: true, data: filtered });
      });
    }
  });
});

app.put("/users/:id", (req, res) => {
  console.log("PUT - Users huselt orj irlee");
  fs.readFile("./database/users.json", (err, data) => {
    let savedData = JSON.parse(data);
    if (err) {
      res.status(500).send({ message: err });
    } else {
      const { id } = req.params;
      const edited = savedData.filter((product) => product.id !== id);
      edited.unshift(req.body);
      fs.writeFile("./database/users.json", JSON.stringify(edited), (err) => {
        err
          ? res.status(500).send({ message: err })
          : res.status(200).send({ message: "Data successfully edited" });
      });
    }
  });
});

// Orders
app.get("/orders", (req, res) => {
  console.log("GET - Orders huselt orj irlee");
  fs.readFile("./database/orders.json", (err, data) => {
    err
      ? res.status(500).send({ message: err })
      : res.status(200).send(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});
