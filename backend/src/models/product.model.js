const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  image: { type: String},
  description: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  quantity: { type: Number, required: true, default: 0 },
})

module.exports = model('Product', productSchema);
