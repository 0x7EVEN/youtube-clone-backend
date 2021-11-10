require("dotenv").config();
const express = require("express");
const dbConnection = require("./configs/db");
const categoryRoutes = require('./routes/category.route');
const commentRoutes = require("./controllers/comment.controller");
const videoRoute = require("./routes/video.route");
const errorHandler = require("./middlewares/error.middleware");

const PORT = process.env.PORT || 2000;


const app = express();
app.use(express.json());



// const {register, login} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");


app.use(videoRoute);
app.use(errorHandler);
app.use('/categories', categoryRoutes);
app.use("/comment", commentRoutes);
app.use("/users", userController);
// app.use("/register", register);
// app.use("/login", login);


// app.use("/api/v1/users", userRoutes);

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


