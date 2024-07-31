const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const getUsersForSidebar = require("../controllers/userController")

const userRouter = express.Router()

userRouter.get("/", authMiddleware, getUsersForSidebar)




module.exports = userRouter