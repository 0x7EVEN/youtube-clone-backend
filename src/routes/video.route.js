const express = require("express");
const {uploadVideo} = require("../controllers/videos.controller");

const Authenticate = require("../middleware/authenticate.middleware");

const router = express.Router();

router.post('/api/video', Authenticate, (req, res, next) => {

    return res.status(200).json({msg: 'Authenticated'});

});

module.exports = router;