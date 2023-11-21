const { Schema, model } = require('mongoose');

const rolSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String, required: false },
})

module.exports = model('Rol', rolSchema);
