const { ServerConfig, Logger } = require('./config');

const express = require('express');
const apiRoutes = require('./routes/index');
const app = express();

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* ************************************ */

/* Route Registration */
app.use('/api', apiRoutes);

/* *************************** */

/* Listening to server */
app.listen(ServerConfig.PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT : ${ServerConfig.PORT}`);
    Logger.info('server started');
});

/* *************************************************** */
