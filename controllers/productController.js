const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

// Product create
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: 'Title can not be empty!'
        });
        return;
    }

    // Create a product
    const product = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discount: req.body.discount
    }

    // Save product in the database
    Product.create(product)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occured when creating product.'
        });
    });
};

