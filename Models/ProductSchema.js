const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imge: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports.Product = mongoose.model("Product", productSchema);
