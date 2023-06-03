const mongoose = require('mongoose');


let productSchema = mongoose.Schema({
    name: { type: 'string' },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})
module.exports = mongoose.model('Product', productSchema)

// const mongoose=require("mongoose")

// let ProductSchema=new mongoose.Schema({
//     "_id":String,
//     "name":String,
//     "price":Number,
//     "img":String
// })
// let ProductModel=mongoose.model('products',ProductSchema)
// module.exports=ProductModel;

