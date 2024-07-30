const bcrypt = require("bcrypt")
const { userModel } = require("../models/userModel");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()


// this is for registration
const registerController = async(req, res) => {
    try {
        let { fullName, username, password, confirmPassword, email, gender } = req.body

        if(!fullName || !username || !password || !confirmPassword || !email || !gender) 
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
                email,
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
                    // let token = jwt.sign(existingUser._id.toString(), process.env.JWT_SECRETE_KEY, { expiresIn: "7d" })
                    let token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" })
                    res.cookie("auth_token", token, {maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true })
                    res.status(200).send({ message: "User successfully Login", token, success: true })
                }
            }
            else {
                return res.status(400).send({ message: "User not found, Please register,", success: false })
            }            
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error", success: false });
    }
};



const logoutController = async(req, res) => {
    try {
        res.clearCookie("auth_token")
        return res.status(200).send({ message: "Logout Successfull" }) 
    }
    catch(error) {
        console.log(error);
        return res.status(500).send({ error: "Something Went Wrong", errMsg: error.message })
    }
}

// Get User details
const getUser = async(req, res) => {
    try {
        const { userId } = req
        // console.log("Extracted userId:", userId);
        let existingUser = await userModel.findById(userId).select("-_id -password -__v")
        if(!existingUser) {
            return res.status(401).send({ message: "User not found", success: false });
        }
        return res.json(existingUser)    
    }
    catch(error) {
        console.log(error);
        return  res.status(500).send({message: "Something went to wrong", success: false})
    }
}


const updateUser = async (req, res) => {
    try {
        const userId = req.userId
        const data = req.body

        // Update user
        const updatedUser = await userModel.findByIdAndUpdate(userId, { $set: { ...data } }, { new: true }).select("-_id -password -__v")

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found", userData: null, success: false });
        }
        
        return res.status(200).send({ message: "User Details Updated", userData: { response }, success: true })
    } 
    catch (err) {
        console.error("Update Error:", err.message);
        return res.status(500).send({ message: "Something went wrong", success: false, errorMsg: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.userId
        await userModel.findByIdAndDelete(userId)
        res.clearCookie("auth_token")
        return res.status(200).send({ message: "User Deleted" })
    } 
    catch (err) {
        return res.status(500).send({ error: "Something went wrong", errorMsg: err.message })
    }
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  getUser,
  updateUser,
  deleteUser
};
