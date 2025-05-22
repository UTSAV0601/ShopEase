// models/reviewModel.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  rating: Number,
  comment: String,
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
