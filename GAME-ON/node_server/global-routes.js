const express = require('express');
const app = express()

const restaurantRouter = require('./modules/restaurants/routes/restaurant.server.routes')
const authenticationRouter = require('./modules/authentication/routes/authentication-server-routes')



console.log("called");


var globalRoutes = function(){
    app.use('/api/restaurants',restaurantRouter);
    app.use('/api/authentication',authenticationRouter);
    
}


module.exports = globalRoutes