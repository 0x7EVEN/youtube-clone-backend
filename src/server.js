const express = require("express");
const dbConnection = require("./configs/db");
const categoryRoutes = require('./routes/category.route')

require("dotenv").config();


const app = express();

app.use(express.json());


app.use('/api/v1/categories', categoryRoutes);


const PORT = process.env.PORT || 2000;

app.listen(PORT,async()=>{
    await dbConnection();
    console.log(`Listening to ${PORT}`);
})

