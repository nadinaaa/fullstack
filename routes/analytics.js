const express = require('express');
const controller = require('../controllers/analytics');
const router = express.Router();

//localhost:5000/api/analytics/overview
router.get('/overview', controller.overview)
router.post('/analytics', controller.analytics)
module.exports = router;