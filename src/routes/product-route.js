const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', controller.get);
router.get('/customer', controller.getCustomer);
router.put('/:id', controller.put);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;