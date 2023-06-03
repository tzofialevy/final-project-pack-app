const mongoose = require('mongoose');


let tripSchema = mongoose.Schema({
    name: { type: 'string', require: true },
    destination: { type: 'string', require },
    StartDate: { type: 'string' },
    endDate: { type: 'string' },
    status: { type: 'planing' | 'creating' | 'packing' },
    products: { type: 'Array' }
    // products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})
module.exports = mongoose.model('Trip', tripSchema)
