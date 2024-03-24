const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');


router.post('/', feedbackController.feedbackResponse)

module.exports = router;