const express = require("express");
const { registerController, loginController, getUser, updateUser, deleteUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");


// Router level middleware
let route = express.Router()

// registration || POST
route.post("/register", registerController)

// Login || POST
route.post("/login", loginController)

//token verification
route.get("/get-user", authMiddleware, getUser)

//updateUser
route.put("/update-user", authMiddleware, updateUser)

//deleteUser
route.delete("/delete-user", authMiddleware, deleteUser)


module.exports = { authRoute: route } 