const express = require("express");
const productRouter = express.Router();
const {
  getAllProdect,
  getProduct,
  saveProduct,
  deleteProduct,
  updateProduct,
} = require("../Controllers/ProductController");
const authentication = require("../Middleware/authentication");
const authorization = require("../Middleware/authorization");
const { Product } = require("../models/ProductSchema");
// authentication,authorization("productOpr"),
productRouter.get("/", getAllProdect);
productRouter.post("/oneProduct", getProduct);
productRouter.post("/save", saveProduct);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.put("/update/:id", updateProduct);

module.exports = { productRouter };
