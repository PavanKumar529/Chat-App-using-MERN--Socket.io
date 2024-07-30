const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

// const url = "mongodb://127.0.0.1:27017/Chat-App";
const url = `${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`

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