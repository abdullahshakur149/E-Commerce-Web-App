const express = require("express");
const path = require("path");
const router = express.Router();
const upload = require("../multer").upload;
const User = require("../models/User");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const isAuthenticated = require("../middleware/auth");
const ErrorHandler = require("../utils/ErrorHandler");
const ms = require("ms");

router.post("/create-user", upload.single("avatar"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user with the given email already exists
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      const filename = req.file.filename;
      const filepath = `uploads/${filename}`;
      fs.unlink(filepath, (err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .json({ status: "error", message: "Error deleting file" });
        } else {
          res.json({ status: "error", message: "User already exists" });
        }
      });
      return next(new ErrorHandler("User already exists", 400));
    }

    if (!req.file) {
      return next(new ErrorHandler("Avatar is required", 400));
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword, // Save the hashed password to the database
      avatar: {
        public_id: filename,
        url: fileUrl,
      },
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

router.post(
  "/login-user",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please fill all the fields"));
      }

      // Find the user by email
      const user = await User.findOne({ email });

      console.log("User found:", user);

      // Check if the user exists
      if (!user) {
        return next(new ErrorHandler("Invalid credentials", 401));
      }

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return next(new ErrorHandler("Invalid credentials", 401));
      }

      // If the credentials are correct, create a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
      });

      res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + ms(process.env.JWT_EXPIRES)),
        path: "/",
      });

      // Send the token in the response
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      // Handle errors
      return next(new ErrorHandler("Internal Server Error", 500));
    }
  })
);
router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return next(new ErrorHandler("User does not exist", 401));
      }

      res.status(200).json({ success: true, user });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
