const express = require("express");
const Authenticate = require("../middleware/authenticate.middleware")
const {videUpload} = require("../middleware/video.middleware")

const videoController = require("../controllers/video.controller")
const {json}  = require("body-parser");
const videoModel = require("../models/video.model");

const router = express.Router();
const Controller = new videoController(); 
router.post("/api/video",Authenticate,videUpload.single("video"), (req,res)=>{
    Controller.upload(req,res);
})

router.get("/api/video/:filename", (req,res)=>{
    Controller.stream(req,res);
})

router.get("/api/video", async (req,res)=>{
    try{
        const videos = await videoModel.find().lean().exec();
        return res.status(200).json({success:true, videos})
    }catch(err){
        return res.status(400).json({msg:err.message})
    }
})
module.exports = router;