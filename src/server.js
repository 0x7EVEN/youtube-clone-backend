const express = require("express");
const dbConnection = require("./configs/db");
const categoryRoutes = require('./routes/category.routes');
const errorHandler = require("./middlewares/error.middleware");


require("dotenv").config();


const app = express();
app.use(express.json());

const userController = require("./controllers/user.controller");
// const {register, login} = require("./controllers/auth.controller");


app.use(errorHandler);
app.use('/categories', categoryRoutes);
app.use("/users", userController);
// app.use("/register", register);
// app.use("/login", login);


// app.use("/api/v1/users", userRoutes);


const PORT = process.env.PORT || 2000;

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


