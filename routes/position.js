const express = require('express');
const controller = require('../controllers/position');
const router = express.Router();

//localhost:5000/api/auth/position
router.get('/:categoryId', controller.getByCategoryId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
module.exports = router;