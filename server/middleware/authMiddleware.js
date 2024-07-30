const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    try {
        // const authHeader = req.headers.authorization
        // if (!authHeader) {
        //     return res.status(401).send({ message: "Unauthorized User", success: false });
        //   }      
        // const token = authHeader.split(" ")[1];
        const token = req.cookies.auth_token
        // console.log(token);
        if(!token) 
            return res.status(401).send({ message: "Unauthrized User, token not found", success: false })
        const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // if(!userId) 
        //     return res.status(401).send({ message: "Invalid Token", success: false })
        req.userId = userId
        next()
    }
    catch(error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error", success: false })
    }
}


module.exports = authMiddleware