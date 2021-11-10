require("dotenv").config();
const express = require("express");
const dbConnection = require("./configs/db");
const categoryRoutes = require("./routes/category.route");
const errorHandler = require("./middleware/error.middleware");



const app = express();
app.use(express.json());

const userController = require("./controllers/user.controller");
// const {register, login} = require("./controllers/auth.controller");
const videoController = require("./controllers/video.controller");
const feelingController = require("./routes/feelings.route");


app.use("/api/v1/users", userController);
app.use("/videos", videoController);
app.use("/feeling", feelingController);

app.use(errorHandler);
app.use('/categories', categoryRoutes);
app.use("/users", userController);
// app.use("/register", register);
// app.use("/login", login);


// app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 2000;
console.log("PORT:", PORT);

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


