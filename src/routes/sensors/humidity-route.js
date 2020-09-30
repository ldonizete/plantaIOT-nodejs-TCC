const express = require('express');
const router = express.Router();
const controller = require('../../controllers/sensors/humidity-controller');

router.get('/', controller.get);
// router.get('/:date', controller.getByDate);
router.get('/:productsID', controller.getByProduct);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;