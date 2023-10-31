const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);

module.exports = router;
