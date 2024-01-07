const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHandler("Please login to continue", 401));
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set the user information on the request object
    req.user = await User.findById(decoded.userId);

    // Call next() to pass control to the next middleware or route handler
    next();
  } catch (error) {
    // If there's an error with token verification, return an error response
    return next(new ErrorHandler("Invalid token", 401));
  }
});

module.exports = isAuthenticated;
