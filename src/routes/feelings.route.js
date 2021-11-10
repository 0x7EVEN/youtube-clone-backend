const express = require("express");
const {
  createFeeling,
  checkFeeling,
  getLikedVideos,
} = require("../controllers/feelings.controller");

const router = express.Router();

const { protect } = require("../middleware/auth.middleware");

router.use(protect);

router.route("/").post(createFeeling);

router.route("/check").post(checkFeeling);

router.route("/videos").get(getLikedVideos);

module.exports = router;
