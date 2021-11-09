const mongoose = require("mongoose");
require("dotenv").config();
module.exports = ()=>{
    try{
    console.log("database connected successfuly")
    return mongoose.connect(process.env.MONGO_URI);

    }catch(err){
        console.log("error", err.message)
    }
}