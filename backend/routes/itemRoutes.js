const express = require('express');
const {
  addItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
  searchItems,
} = require('../controllers/itemController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addItem);
router.get('/', getAllItems);
router.get('/search', searchItems);
router.get('/:id', getItemById);
router.put('/:id', protect, updateItem);
router.delete('/:id', protect, deleteItem);

module.exports = router;
