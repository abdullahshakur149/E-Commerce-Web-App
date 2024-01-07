const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with the actual origin of your React app
    credentials: true,
  }));
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env" 
    });
}

// import routes
const user = require('./controllers/userController');
app.use('/api/v2/user', user);

// Error handling middleware
const ErrorHandler = require('./utils/ErrorHandler')
app.use(ErrorHandler); 

module.exports = app;
