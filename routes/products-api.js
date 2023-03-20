import express, { Router } from "express";
import Product from "../model/products.js";
import multer from "multer";
import { nanoid } from "nanoid";

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
  filename: (req, file, cb) => {},
});

// productRouter.post("/post", async (req, res) => {
//   console.log("posted");
//   res.send("test");
// });

export default productRouter;
