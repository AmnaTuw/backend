const { Product } = require("../models/ProductSchema");

//------------------------------------------------------//
//**            Get All Product               **/
//------------------------------------------------------//

const getAllProdect = (req, res) => {
  Product.find({ Product })
    .then((Product) => {
      res.status(200).json(Product);
    })
    .catch((err) => {
      console.log(err);
    });
};
//------------------------------------------------------//
//**            Get One Product               **/
//------------------------------------------------------//
const getProduct = (req, res) => {
  const { name } = req.body;
  Product.findOne({ name: name })
    .then((Product) => {
      if (Product) {
        res.status(200).json(Product);
      } else {
        res.status(404).json(" Product Not Found ");
      }
      return res;
    })
    .catch((err) => console.error(err));
};
//------------------------------------------------------//
//**                Save  Product            **//
//------------------------------------------------------//

const saveProduct = (req, res) => {
  const { name, img, desc } = req.body;
  const newProduct = new Product({
    name,
    img,
    desc,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err, "Error, Product Can Not Saving ");
    });
};
//---------------------------------------------------------//
//**                Delete  Product            **//
//------------------------------------------------------//

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((resulte) => {
      res.status(201).json(resulte);
    })
    .catch((error) => {
      res.status(400).json(error, "Error, Product Can  Not Delete");
    });
};
//------------------------------------------------------//
//**              UpDate  Product            **/
//------------------------------------------------------//

const updateProduct = (req, res) => {
  const id = req.params.id;

  Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((resulte) => {
      res.status(201).json(resulte);
    })
    .catch((error) => {
      res.status(400).json(error, "Error, Product Can  Not update");
    });
};

module.exports = {
  getAllProdect,
  getProduct,
  saveProduct,
  deleteProduct,
  updateProduct,
};
