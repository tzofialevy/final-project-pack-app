const mongoose = require('mongoose');


let categorySchema = mongoose.Schema({
    name: { type: 'string'},    
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})
module.exports = mongoose.model('Category', categorySchema)


