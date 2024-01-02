const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name:  { type: String, require: true },
  description:  { type: String, require: false },
  mainCategory: {type: String, require: true },
  price: { type: Number, require: true},
  bestseller: { type: Boolean, require: false },
  imagePath:  { type: String, require: false },
});


module.exports = mongoose.model('productSchema', productSchema);