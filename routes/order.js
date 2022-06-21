const express = require('express');
const controller = require('../controllers/order');
const router = express.Router();

//localhost:5000/api/order
router.get('/', controller.getAll)
router.post('/', controller.create)
module.exports = router;

