const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
const {authRoute} = require("./routers/authRoutes");
const { dbConnect } = require("./config/dbConnect");
const otpRoute = require("./routers/otpRoutes");
const messageRouter = require("./routers/messageRouter");
const userRouter = require("./routers/userRoute");

dotenv.config()

const hostName = process.env.HOST_NAME || "127.0.0.5"
const PORT = process.env.PORT || 5000

const app = express()

// middleware 
app.use(express.json()) // Middleware for parsing JSON bodies
app.use(cookieParser())


// Routes
app.use("/api/auth", authRoute)
app.use("/api/otp", otpRoute)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)



// Demo API
app.get("/", (req, res) => {
    res.send("Hello, I am API")
})

app.listen(PORT, hostName, () => {
    console.log(`Server running at http://${hostName}:${PORT}`);
    dbConnect()
})

