require("dotenv").config();
const express = require("express");
const dbConnection = require("./configs/db");
// const categoryRoutes = require('./routes/category.route');
// const commentRoutes = require("./routes/comments.routes");
// const errorHandler = require("./middleware/error.middleware");
// const userController = require("./controllers/user.controller");
const AuthRoutes = require("./routes/auth.route")
const VideoRoutes = require("./routes/video.routes");
require("dotenv").config();
const app = express();

app.use(express.json());



// const {register, login} = require("./controllers/auth.controller");
//const videoController = require("./controllers/video.controller");
//const feelingController = require("./routes/feelings.route");


//app.use("/feeling", feelingController);

//app.use(errorHandler);
//app.use('/categories', categoryRoutes);
//app.use("/api/video", videoController);
// app.use("/comment", commentRoutes);
//app.use("/users", userController);
// app.use("/register", register);
// app.use("/login", login);


// app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/users", userRoutes);


//=============================================Server Endpoints================================
app.use(AuthRoutes);
app.use(VideoRoutes)



const PORT = process.env.PORT || 2000;
console.log("PORT:", PORT);

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


