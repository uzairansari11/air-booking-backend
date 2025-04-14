/* ********** Custom Error Class Using Error Base Class*********** */

class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // Passing message to base class i:e Error
        this.statusCode = statusCode; // Setting statusCode to current error instance
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error'; // Setting status base on status code

        this.isOperational = true; // Indicates expected errors

        /* Preserving error traces of base class

      1 - current object : this
      2 - custom error class : this.constructor`
      */
        Error.captureStackTrace(this, this.constructor);
    }
}
  
module.exports = AppError;
