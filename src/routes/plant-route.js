const express = require('express');
const router = express.Router();
const controller = require('../controllers/plant-controller');

router.get('/config/:productsID', controller.getByIDProduct);
router.get('/:productsID', controller.getByProduct);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/:id', controller.put);

module.exports = router;