const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

router.get('/', cartController.getCarts);
router.post('/', cartController.createCart);

router.get('/:id', cartController.getCartById, (req, res) => {
  res.json(res.cart);
});

router.put('/:id', cartController.getCartById, cartController.updateCart);
router.delete('/:id', cartController.getCartById, cartController.deleteCart);

module.exports = router;
