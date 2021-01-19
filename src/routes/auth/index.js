const express = require('express');

const authController = require('../../controllers/auth/authController');

const router = express.Router();

router.get('/', authController.getAuth);

module.exports = router;