const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if(!token) return res.status(401).send({ message: "Unauthrized User", success: false })
        const userId = jwt.verify(token, process.env.SECRETE_KEY)
        if(!userId) return res.status(401).send({ message: "Invalid Token", success: false })
        req.user = userId
        next()
    }
    catch(error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports = authMiddleware