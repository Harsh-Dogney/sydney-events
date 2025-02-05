const express = require('express');
const { collectEmail } = require('../controllers/emailController');
const router = express.Router();

router.post('/', collectEmail);

module.exports = router;