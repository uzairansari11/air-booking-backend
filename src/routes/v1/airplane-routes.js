const express = require('express');
const { AirplaneController } = require('../../controllers');
const { airPlaneMiddleware } = require('../../middlewares');

const router = express.Router();

router.post(
    '/',
    airPlaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane,
);

module.exports = router;
