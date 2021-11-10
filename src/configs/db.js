const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
    try {
        console.log("database connected successfuly");
        return mongoose.connect("mongodb+srv://youtube:dbUserPassword@cluster0.qhdmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    } catch (err) {
        console.log("error", err.message);
    }
};