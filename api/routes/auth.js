const express = require('express');
const authController = require('../../controllers/auth');
const auth = require('../../middleware/auth');

const router = express.Router();

router.post('/', auth, authController.login);

module.exports = router;
