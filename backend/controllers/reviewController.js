import Review from '../models/reviewModel.js';

export const getReviewsByProductId = async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
};
