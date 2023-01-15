const express = require('express');
const app = express();
const port=4000;
const path = require('path');
const index =require(path.join(__dirname,'routes/Routehandler.js'));
const mongoose = require('mongoose');
app.use('/',index);
app.use('/about',index);
app.use('/contact',index);
app.use('/blog',index)



app.listen(port, function()
 {

    console.log('server is listening on port' + port)
});
