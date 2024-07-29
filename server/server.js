const express = require("express")
const dotenv = require("dotenv")
const authRoutes = require("./routers/authRoutes");
// const messageRoutes = require("./routers/messageRoutes")
// const usersRoutes = require("./routers/usersRoutes")

dotenv.config()

const hostName = process.env.HOST_NAME || "127.0.0.5"
const PORT = process.env.PORT || 5000

const app = express()

// route
app.use("/api/auth", authRoutes)
// app.use("/api/message", messageRoutes)
// app.use("/api/users", usersRoutes)



// Demo API
app.get("/", (req, res) => {
    res.send("Hello, I am API")
})

app.listen(PORT, hostName, () => {
    console.log(`Server running at http://${hostName}:${PORT}`);
})

