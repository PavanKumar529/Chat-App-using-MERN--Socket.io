const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const { otpController,otpGenerateController, otpVerifyController } = require("../controllers/otpController")


const otpRoute = express.Router()

otpRoute.get("/", authMiddleware, otpController)
otpRoute.post('/otp-generate', authMiddleware, otpGenerateController)
otpRoute.post('/otp-verify', authMiddleware, otpVerifyController)

module.exports = otpRoute