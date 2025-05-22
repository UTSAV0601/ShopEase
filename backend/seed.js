// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';

dotenv.config();

// Sample data
const dummyProducts = Array.from({ length: 10 }).map((_, i) => ({
  title: `Product ${i + 1}`,
  price: parseFloat((Math.random() * 100).toFixed(2)),
  image: `https://picsum.photos/seed/phone${i}/400/400`,
  description: `Description for Product ${i + 1}`,
  stock: Math.floor(Math.random() * 100),
  category: 'electronics',
}));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('MongoDB connected');

    await Product.deleteMany({});
    console.log('Old products removed');

    await Product.insertMany(dummyProducts);
    console.log('New products added');

    process.exit();
  })
  .catch((err) => {
    console.error('Error seeding DB:', err);
    process.exit(1);
  });
