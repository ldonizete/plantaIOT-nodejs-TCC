const express = require('express');
const router = express.Router();
const controller = require('../controllers/plantImage-controller');

// router.get('/', controller.get);
router.get('/:plantID', controller.getByPlant);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;