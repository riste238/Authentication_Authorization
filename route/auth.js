const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers.js');


router.post('/', authController.handleAuth);

module.exports = router;