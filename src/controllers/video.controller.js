const express = require("express");

const router = express.Router();

const Video = require("../models/video.model");

router.post("/", async function (req, res) {
  const video = await Video.create(req.body);

  return res.send(video);
});

router.get("/", async function (req, res) {
  const videos = await Video.find().lean().exec();

  return res.send(videos);
});

// router.get("/", async function (req, res) {});


module.exports = router