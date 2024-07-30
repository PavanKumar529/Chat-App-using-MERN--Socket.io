const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

// Define the transporter for sending emails
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})
module.exports = transporter
