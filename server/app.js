const express = require('express');
const app = express();
const router = require('./routes/routers');
const port = 3000;
app.use(router);
const server = app.listen(port, () => console.log(`running on server: ${port}`));
module.exports = {app, server};