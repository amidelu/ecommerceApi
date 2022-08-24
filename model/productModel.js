const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        discount: {
            type: Sequelize.DOUBLE
        },
        category: {
            type: Sequelize.STRING
        },
        subCategory: {
            type: Sequelize.STRING
        }
    });

    return Product;
}