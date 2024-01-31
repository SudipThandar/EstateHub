const express = require('express');
const listingController = require('../controller/listing.controller');
const verifyToken = require('../utils/verifyUser');

const router = express.Router();

router.post('/create', verifyToken, listingController.create);

module.exports = router;
