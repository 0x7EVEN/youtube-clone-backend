const express = require("express");

const router = express.Router();


const User = require("../models/user.model");
const uplaod = require("../utils/uploader");

router.get("/", async function(req, res) {
     try {
          const users = await User.find().lean().exec();
          return res.send(users);
     } catch (err) {
          return res.send(err.message);
     }
});

router.post("/", uplaod.any(), async function(req, res) {
     console.log(req.body);
     try {
          const user = await User.create(req.body);

          const token = user.getSignedJwtToken();
          console.log('token:', token);
          return res.status(200).json({user, token});
     } catch (err) {
          res.send(err.message);
     }
});

router.get("/:id", async function(req, res) {
     try {
          const user = await findById(req.params.id).populate({
               path: 'subscribers'
          });
          if (!user) {return res.send("no user found !");}
          return res.send(user);
     } catch (err) {
          return res.send(err.message);
     }
});

router.patch("/:id", async function(req, res) {
     try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body);

          if (!user) {return res.send("no user found !");}

          return res.send(user);

     } catch (err) {
          return res.send(err.message);
     }
});


module.exports = router;