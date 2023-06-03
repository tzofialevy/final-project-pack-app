const express = require("express");
const router =express.Router();
const AttractionBl=require("../Bl/AttractionBl")

router.route('/')
.get(async function(req,res){   
   let data=await AttractionBl.getAllAttraction();
   return res.json(data)
})
router.route('/:id')
.get(async function(req,res){
   let id=req.params.id;   
   let data=await AttractionBl.getAttractionByID(id);
   return res.json(data)
})
router.route('/')
.post(async function(req,res){
   let body=req.body
   let data=await AttractionBl.createAttraction(body);
   return res.json(data)
})
router.route('/:id')
.put(async function(req,res){
   let id=req.params.id;
   let body=req.body;
   let data=await AttractionBl.updateAttraction(id,body);
   return res.json(data)
})
router.route('/:id')
.delete(async function(req,res){
   let id=req.params.id;
   let data=await AttractionBl.deleteAttraction(id);
   return res.json(data)
})

module.exports=router