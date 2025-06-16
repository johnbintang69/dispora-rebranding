import express from 'express';
import { createNews, deleteNews, getAllNews } from '../controllers/newsController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllNews);
router.post('/', isAuthenticated, createNews);
router.delete('/:id', isAuthenticated, deleteNews);

export default router;