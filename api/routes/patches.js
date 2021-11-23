const express = require('express');
const patchController = require('../../controllers/patches');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', (req, res, next) => {
  next();
});
router.post('/', auth, patchController.patches);
module.exports = router;
