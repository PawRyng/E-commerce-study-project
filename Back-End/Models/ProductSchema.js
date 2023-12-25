const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name:  { type: String, require: true },
  description:  { type: String, require: false },
  imagePath:  { type: String, require: false },
});


module.exports = mongoose.model('productSchema', productSchema);