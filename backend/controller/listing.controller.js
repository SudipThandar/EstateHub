const Listing = require('../models/listing.model');
const errorHandler = require('../utils/error');

exports.create = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
