const bcrypt = require("bcrypt")
const { userModel } = require("../models/userModel");


const registerController = async(req, res) => {
    try {
        let { fullName, username, password, confirmPassword, gender } = req.body

        if(!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).send({ message: "Please provide all details", success: false });
        }
        if(password !== confirmPassword) {
            return res.status(400).send({ message: "Passwords don't match", success: false })
        }
        const existingUser = await userModel.findOne({username})
        if(existingUser) {
            return res.status(400).send({ message: "username already exists"})
        }

        // HASH PASSWORD HERE
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound)

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

            const newUser = new userModel({
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === "male"? boyProfilePic : girlProfilePic
            })
            if(newUser) {
                // Generate JWT Here 
                await newUser.save()
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

const loginController = (req, res) => {
  return res.status(200).send({ message: "I am Login Controller" });
};

module.exports = {
  registerController,
  loginController,
};
