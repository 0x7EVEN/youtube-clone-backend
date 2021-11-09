const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new mongoose.Schema({
    title:{type:String, minlength:[3, "Title must be 3 char long"]}
})