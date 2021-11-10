const express = require("express");
const dbConnection = require("./configs/db");
const categoryRoutes = require('./routes/category.route');
const errorHandler = require("./middlewares/error.middleware");


require("dotenv").config();


const app = express();
app.use(express.json());

const userController = require("./controllers/user.controller");

app.use('/categories', categoryRoutes);

app.use("/api/v1/users", userController);
app.use(errorHandler);
// app.use("/api/v1/users", userRoutes);


const PORT = process.env.PORT || 2000;

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


