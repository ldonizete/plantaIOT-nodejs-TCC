const express = require('express');
const router = express.Router();
const controller = require('../controllers/sensorDHT11-controller');

router.get('/', controller.get);
router.get('/:date', controller.getByDate);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;