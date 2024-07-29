const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const hostName = process.env.HOST_NAME
const PORT = process.env.PORT

// Demo API
app.get("/", (req, res) => {
    res.send("Hello, I am API")
})

app.listen(5000, () => {
    console.log(`Server running at http://${hostName}:${PORT}`);
})

