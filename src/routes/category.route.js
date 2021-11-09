const express = require("express");
const {getCategories, getCategory, updateCategory, createCategories} = require("../controllers/category.controller");



const router = express.Router();

router
     .route("/",)
     .get(getCategories)
     .post(createCategories);


router
     .route('/:id')
     .get(getCategory)
     .put(updateCategory);

module.exports = router;