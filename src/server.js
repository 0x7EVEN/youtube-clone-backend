const express = require("express");
const dbConnection = require("./configs/db");
<<<<<<< HEAD
const categoryRoutes = require('./routes/category.route');
=======
const categoryRoutes = require('./routes/category.route')
const errorHandler = require("./middlewares/error.middleware")


require("dotenv").config();


>>>>>>> 8daaa628925cd25ff1bab18b5d1be421c664d225
const app = express();
app.use(express.json());

<<<<<<< HEAD
const userController = require("./controllers/user.controller");

app.use('/categories', categoryRoutes);

app.use("/api/v1/users", userController);
=======
app.use('/categories', categoryRoutes);
app.use(errorHandler)
// app.use("/api/v1/users", userRoutes);
>>>>>>> 8daaa628925cd25ff1bab18b5d1be421c664d225


const PORT = process.env.PORT || 2000;

app.listen(PORT,async()=>{
    await dbConnection();
    console.log(`Listening to ${PORT}`);
})


