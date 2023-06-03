const mongoose = require('mongoose');


let attractionSchema = mongoose.Schema({
    name: { type: 'string'},    
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})
module.exports = mongoose.model('Attraction', attractionSchema)


