const express = require("express");
const Authenticate = require("../middleware/authenticate.middleware")
const {videUpload} = require("../middleware/video.middleware")

const videoController = require("../controllers/video.controller")
const {json}  = require("body-parser");

const router = express.Router();
const Controller = new videoController(); 
router.post("/api/video",Authenticate,videUpload.single("video"), (req,res)=>{
    Controller.upload(req,res);
})

router.get("/api/video/:filename", (req,res)=>{
    Controller.stream(req,res);
})

module.exports = router;