const { response, request } = require("express");
const verify = require("jsonwebtoken");

require("dotenv").config();

module.exports.Authenticate = (req,res,next)=>{
    const token = req.headers['x-auth-token'];
    verify(token, process.env.cookie_secret,(error,decoded)=>{
        if(error){
            return res.status(400).send(400).json({msg:"signup or login to upload video"});
        }
        request.token = decoded;
        next()
    })
}