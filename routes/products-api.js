// import express, { Router } from "express";
// import Product from "../model/products.js";
// import multer from "multer";
// import { nanoid } from "nanoid";
const express = require("express");
const { Router } = require("express");
const multer = require("multer");
const { nanoid } = require("multer");

const productRouter = express.Router();

// productRouter.get("/", async (request, response) => {
//   console.log("get request 1");
//   const getProduct = await Product.find({});
//   try {
//     response.status(200).send(getProduct);
//     console.log(getProduct);
//   } catch (error) {
//     response.status(404).send(error);
//   }
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    console.log("extension: ", ext);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});

const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

const upload = multer({ storage: storage });

productRouter.post("file", upload.single("file"), async (req, res) => {
  console.log("req.file: ", req.file);
});

// productRouter.post("/post", async (req, res) => {
//   console.log("posted");
//   res.send("test");
// });
