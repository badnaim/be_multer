import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    sale: Number,
    specs: [Object],
    brand: String,
    category: String,
    description: String,
  },
  { collection: "product" }
);

const Product = mongoose.model("products", productSchema);

export default Product;
