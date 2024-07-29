const express = require("express");
const { registerController, loginController, logoutController, logoutFromAllDeviceController, forgetPasswordController } = require("../controllers/authController");


// Router level middleware
let route = express.Router()

// registration || POST
route.post("/register", registerController)

// Login || POST
route.post("/login", loginController)


module.exports = route 