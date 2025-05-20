// reviewRoutes.js
import express from 'express';
import { getReviewsByProductId } from '../controllers/reviewController.js';

const router = express.Router();
router.get('/:productId', getReviewsByProductId);

export default router;
