const { createLogger, format, transports } = require('winston');
const { combine, timestamp,  printf, colorize, errors } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Create logger instance
const logger = createLogger({
  level: 'info', // Change to 'debug' if needed
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // log error stack
    logFormat,
  ),
  transports: [
    // Write all logs with level `error` and below to `error.log`
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    // Write all logs to combined.log
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

// If not in production, also log to the console with color
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), logFormat),
    }),
  );
}

module.exports = logger;
