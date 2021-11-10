const express = require("express");
const dbConnection = require("./configs/db");
const categoryRoutes = require('./routes/category.route');
const errorHandler = require("./middleware/error.middleware");


require("dotenv").config();


const app = express();
app.use(express.json());

const userController = require("./controllers/user.controller");
const videoController = require("./controllers/video.controller");
// const feelingController = require("./controllers/feelings.controller");

app.use('/categories', categoryRoutes);

app.use("/api/v1/users", userController);
app.use("/videos", videoController);
// app.use("/feeling", feelingController);

app.use(errorHandler);
// app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 2000;
console.log("PORT:", PORT);

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Listening to ${PORT}`);
});


