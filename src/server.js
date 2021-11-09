const express = require("express");
const dbConnection = require("./configs/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 2000;

app.listen(PORT,async()=>{
    await dbConnection();
    console.log(`Listening to ${PORT}`);
})

