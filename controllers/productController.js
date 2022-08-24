const { sequelize } = require("../model");
const db = require("../model");

const Product = db.product;

// Product create
const addProduct = async (req, res) => {
    // Create a product
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    category: req.body.category,
    subCategory: req.body.subCategory,
  };

  try {
    await Product.create(product);
    res.status(200).send({
        message: 'Product added successfully'
    });
  } catch (err) {
    res.status(500).send({
        message: err.message || "Some error occured when creating product.",
    });
  }

}

// Find all products
const getAllProduct = async (req, res) => {
  await Product.findAll({
    order: [["id", "DESC"]],
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error from All products",
      });
    });
};

// Find product by title
const getProductByTitle = async (req, res) => {
    await Product.findAll({
        where: {
            title: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('title')),
                'LIKE',
                '%' + req.params.title + '%'
                ),
        }
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error from find product by title",
        });
      });
  };


module.exports = {
    addProduct,
    getAllProduct,
    getProductByTitle
}
