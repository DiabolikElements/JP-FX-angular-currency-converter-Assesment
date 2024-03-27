const Currencies = require('../models/currency');

//gets all currencie base
exports.getAllCurrencies = async (req, res, next) => {
  try {
    const [allCurrencies] = await Grocery.fetchAll();
    res.status(200).json(allGroceries);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// post currencies
exports.postCurrencies = async (req, res, next) => {
  try {
    const postResponse = await Currencies.post(req.body.item);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putCurrencies = async (req, res, next) => {
  try {
    const putResponse = await Currencies.update(req.body.id, req.body.item);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteCurrencies = async (req, res, next) => {
  try {
    const deleteResponse = await Currencies.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};