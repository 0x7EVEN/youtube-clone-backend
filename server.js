const mongoose = require('mongoose');
const express = require("express");
const app = express();


const connect = require("./configs/db");

app.use(express.json());









app.listen(8080, async () => {
     await connect();
     console.log("listening on port 8080");
});
