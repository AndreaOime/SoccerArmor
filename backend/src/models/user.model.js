const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
  rol: { type: Schema.Types.ObjectId, ref: 'Rol' },
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' }
})

module.exports = model('User', userSchema);
