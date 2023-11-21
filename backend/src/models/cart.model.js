const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  quantity: { type: Number, required: true, default: 0 },
  total: { type: Number, required: true, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

module.exports = model('Cart', cartSchema);
