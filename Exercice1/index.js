// IMPORT
const express = require('express');
 
// APP
const router = require('./router');
const app = express();

// PORT
const port = process.env.PORT || 8080;

// ROUTER
app.use('/', router);

// SERVER
app.listen(port, () => {
    console.log(`Running app on ${port}`);
})