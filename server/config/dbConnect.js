const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/Chat-App";

const dbConnect = async() => {
    try {
        await mongoose.connect(url)
        console.log("Database is connected");
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { dbConnect }