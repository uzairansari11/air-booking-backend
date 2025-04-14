const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
    if (!req.body.modelName) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = { explanation: 'airplane model name missing' };
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
};
