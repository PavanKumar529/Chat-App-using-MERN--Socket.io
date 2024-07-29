const express = require("express")

const app = express()


// Demo API
app.get("/", (req, res) => {
    res.send("Hello, I am API")
})

app.listen(5000, () => {
    console.log("Server Running on PORT 5000");
})

