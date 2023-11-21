const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);

router.get('/:id', productController.getProductById, (req, res) => {
  res.json(res.product);
});

router.put('/:id', productController.getProductById, productController.updateProduct);
router.delete('/:id', productController.getProductById, productController.deleteProduct);

module.exports = router;
