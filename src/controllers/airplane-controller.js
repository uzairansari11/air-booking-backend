const { StatusCodes } = require('http-status-codes');
const { AirplaneServices } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(request, response) {
    try {
        const airplane = await AirplaneServices.createAirplane({
            modelNumber: request.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = airplane;
        response.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
};
