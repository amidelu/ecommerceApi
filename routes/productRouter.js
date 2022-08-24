const productController = require('../controllers/productController');
const router = require('express').Router();

// Add product router
router.post('/addProduct', productController.addProduct);

// Get All Product router
router.get('/getAllProduct', productController.getAllProduct);

// Get product by title
router.get('/getProductByTitle/:title', productController.getProductByTitle);

module.exports = router