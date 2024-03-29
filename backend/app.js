const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middlewares
const corsOptions = {
    origin: 'https://e-commerce-web-app-topaz.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
    credentials: true, // Allow credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env" 
    });
}

// Import routes
const user = require('./controllers/userController');
app.use('/api/v2/user', user);

// Error handling middleware
const ErrorHandler = require('./utils/ErrorHandler')
app.use(ErrorHandler); 

module.exports = app;
