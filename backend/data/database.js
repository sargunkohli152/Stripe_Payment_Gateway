const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => {
        console.log(`Connected to DataBase: ${process.env.DATABASE_URL}`)
    })
    .catch( (error) => {
        console.log("Error occurred while connecting to database");
        console.log(error.message);
    })
}

module.exports = connectDB;