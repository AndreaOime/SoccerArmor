const Cart = require('../models/cart.model');

async function getCarts(req, res) {
  try {
    const carts = await Cart.find().populate('user products');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createCart(req, res) {
  const cart = new Cart(req.body);
  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getCartById(req, res, next) {
  let cart;
  try {
    cart = await Cart.findById(req.params.id).populate('user products');
    if (cart === null) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.cart = cart;
  next();
}

async function updateCart(req, res) {
  try {
    await Cart.findByIdAndUpdate(res.cart.id, req.body);
    const cartUpdated = await Cart.findById(res.cart.id).populate('user products');
    res.json(cartUpdated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCart(req, res) {
  try {
    await Cart.findByIdAndDelete(res.cart.id);
    res.json({ message: 'Carrito eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getCarts,
  createCart,
  getCartById,
  updateCart,
  deleteCart,
};
