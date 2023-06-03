const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstname: { type: 'string'},
    lastname: { type: 'string' },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true, minLength: 4 },
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }]
})
module.exports = mongoose.model('User', userSchema)


