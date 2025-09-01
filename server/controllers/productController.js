// productController.js

const productModel = require("../models/productModel");

exports.getAllProducts = (req, res) => {
  productModel
    .getAllProducts()
    .then((products) => {
      console.log("inside then");
      res.json(products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.getProductDetailsById = (req, res) => {
  const productId = req.params.id;
  productModel
    .getProductDetailsById(productId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error fetching product.");
    });
};

exports.allOrderByProductId = (req, res) => {
  const productId = req.params.id;
  productModel
    .allOrderByProductId(productId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error fetching product.");
    });
};

exports.createProduct = (req, res) => {
  console.log("req: ", req);
  const { name, price, description } = req.body;
  const image = req.file ? req.file.filename : null; // file name or null

  // console.log("name", name);
  // console.log("image", image);
  productModel
    .createProduct(name, price, description, image)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err.message);
      console.log("err.message", err.message);
      res.status(500).send("Error creating product.");
    });
};

exports.updateProduct = (req, res) => {
  const { id, name, price, description } = req.body;
  productModel
    .updateProduct(id, name, price, description)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error updating product.");
    });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  productModel
    .deleteProduct(productId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error deleting product.");
    });
};
