const express = require('express');
const patchController = require('../../controllers/patches');
const auth = require('../../middleware/auth');

const router = express.Router();

router.patch('/', auth, patchController.patches);
module.exports = router;
