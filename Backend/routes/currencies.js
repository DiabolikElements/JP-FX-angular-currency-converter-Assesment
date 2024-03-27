const express = require('express');

const groceryController = require('../controllers/currencies');

const router = express.Router();

router.get('/', currencyController.getAllCurrencies);

router.post('/', currencyController.postCurrencies);

router.put('/', currencyController.putCurrencies);

router.delete('/:id', currencyController.deleteCurrencies);

module.exports = router;