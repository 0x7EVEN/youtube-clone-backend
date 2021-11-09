const Category = require("../models/category.model");


// @desc get categories
//@route  GET/api/v1/categories
module.exports.getCategories = async(req,res,next)=>{
    try{
        const categories = await Category.find().lean().exec();
        return res.status(200).json({success:true, data:categories})
    }catch(err){
        return res.status(2001).send(err.message)
    }
}

// @desc get categories
//@route  GET/api/v1/categories/:id
module.exports.getCategory = async(req,res,next)=>{
    try{
        const category = await Category.findById(req.params.id).lean().exec();
        if(!category){
            return res.status(400).json({success:true, error:"No category found"})
        }
        return res.status(200).json({success:true, data:category})
    }catch(err){
        return res.status(2001).send(err.message)
    }
}


//create category
module.exports.createCategories = async(req,res,next)=>{
    try{
        const category = await Category.create(req.body);
        return res.status(200).json({success: true, data: category})
    }catch(err){
        return res.status(400).json({success: false, error:err.message})
    }
}