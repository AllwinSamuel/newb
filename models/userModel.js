const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {type: String , unique:true},
    password : String 
})

const userModel = mongoose.model("userModel",userSchema)

module.exports = userModel;