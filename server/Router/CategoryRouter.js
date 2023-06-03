const express = require("express");
const router =express.Router();
const CategoryBl=require("../Bl/CategoryBl")

router.route('/')
.get(async function(req,res){   
   let data=await CategoryBl.getAllCategory();
   return res.json(data)
})
router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await CategoryBl.getCategoryByID(id);
   return res.json(data)
})
router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await CategoryBl.createCategory(body);
   return res.json(data)
})
router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await CategoryBl.updateCategory(id,body);
   return res.json(data)
})
router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await CategoryBl.deleteCategory(id);
   return res.json(data)
})

module.exports=router