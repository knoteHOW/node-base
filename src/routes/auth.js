const express = require('express');

const { isLoggedIn } = require('../middlewares/auth');
const { join, login } = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res) => res.send("auth"));

router.post('/join', join);
router.post('/login', login);

module.exports = router;