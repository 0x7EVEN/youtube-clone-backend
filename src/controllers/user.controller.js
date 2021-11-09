const express = require("express");

const router = express.Router();


const User = require("../models/user.model");


router.get("/", async function(req, res) {
     try {
          const users = await User.find().lean().exec();
          return res.sendStatus(200).json({users});
     } catch (err) {
          return res.sendStatus(401).send(err.message);
     }
});

router.post("/", async function(req, res) {
     try {
          const user = await User.create(req.body);
          return res.sendStatus(201).json({user});
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