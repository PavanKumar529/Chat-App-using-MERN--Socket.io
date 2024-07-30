const bcrypt = require("bcrypt")
const { userModel } = require("../models/userModel");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()


// this is for registration
const registerController = async(req, res) => {
    try {
        let { fullName, username, password, confirmPassword, gender } = req.body

        if(!fullName || !username || !password || !confirmPassword || !gender) 
            return res.status(400).send({ message: "Please provide all details", success: false });
        if(password !== confirmPassword) 
            return res.status(400).send({ message: "Passwords don't match", success: false })
        const existingUser = await userModel.findOne({username})
        if(existingUser) 
            return res.status(400).send({ message: "username already exists"})

        // HASH PASSWORD HERE
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // Set profile picture based on gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const profilePic = gender === "male"? boyProfilePic : girlProfilePic

            const newUser = await new userModel({
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic
            })
            await newUser.save()
            if(newUser) {
                return res.status(201).send({ message: "Successfully registered", success: true, newUser})
            }
            else {
                return res.status(400).send({ message: "Invalid user data", success: false })
            }
    }
    catch(error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error", success: false });
    }
};

// this is for login
const loginController = async(req, res) => {
    try {
        let { username, password } = req.body
        if(!username || !password) 
            return res.status(400).send({ message: "All fields are required*", success: true });
        else {
            const existingUser = await userModel.findOne({ username })
            if(existingUser) {
                let isMatched = await bcrypt.compare(password, existingUser.password)
                if(!isMatched) 
                    res.status(401).send({ message: "Either username or password is wrong", success: false })
                else {
                    // let token = jwt.sign(existingUser._id.toString(), process.env.SECRETE_KEY, { expiresIn: "7d" })
                    let token = jwt.sign({ id: existingUser._id }, process.env.SECRETE_KEY, { expiresIn: "7d" })
                    res.status(200).send({ message: "Login Successful", token, success: true })
                }
            }
            else {
                return res.status(400).send({ message: "Invalid user data, Please login again", success: false })
            }            
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error", success: false });
    }
};

module.exports = {
  registerController,
  loginController,
};
