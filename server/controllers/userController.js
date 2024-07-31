const { userModel } = require("../models/userModel");

const getUsersForSidebar = async(req, res) => {
    try {
        // Fetching Logged-in User ID:
        const loggedInUserId = req.userId

        // const allUsers = await userModel.find()  // userId :user.id
        // Fetch users excluding the logged-in user and filter out specific fields
        const filteredUsers = await userModel.find({ userId: { $ne: loggedInUserId } }).select("-_id -password -gender -__v")
        res.status(200).json({  meassage: "User details get successfully", success: false, filteredUsers})

        // res.status(200).send({ meassage: "User details get successfully", success: false })
    }
    catch(error) {
        console.log(error.message);
        res.status(500).send({ message: "Internal Server Error", success: false })
    }
}

module.exports = getUsersForSidebar