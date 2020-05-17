const mongoose = require ('mongoose')

const UserModel = mongoose.model('User',{
    "name": String,
    "address": String,
    "gender" : String,
    "createdAt": Date
})

module.exports = UserModel;