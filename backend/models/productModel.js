// models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  stock: { type: Number, default: 0 },
  category: String,
});

const Product = mongoose.model('Product', productSchema);
export default Product;

