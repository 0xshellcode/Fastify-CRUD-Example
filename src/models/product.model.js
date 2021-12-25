const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
  },
  {
    timestaps: true,
    versionKey: false,
  }
);

module.exports = model('Product', productSchema);
