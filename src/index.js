const { ServerConfig, Logger } = require('./config');

const express = require('express');
const apiRoutes = require('./routes/index');
const app = express();
app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT : ${ServerConfig.PORT}`);
  Logger.info('server started');
});
