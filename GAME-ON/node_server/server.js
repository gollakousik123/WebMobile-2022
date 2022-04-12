require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
const chalk = require('chalk')
const jwt = require('jsonwebtoken')
app.use(cors())

  
  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }
  
  // Enable preflight requests for all routes
  app.options('*', cors(corsOptions));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const activityRouter = require('./modules/activities/routes/activities.server.routes')
app.use('/api/activity',activityRouter);
//routes();

app.use(express.json())


const port = process.env.PORT || '5001';
app.listen(port, () => console.log(chalk.green(`Server started on Port : ${port}`)));

