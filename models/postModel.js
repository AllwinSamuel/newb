const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
   title:String,
   summary:String,
   content:String,
   cover:String,
   author:String
},{timestamps:true})

const postModel = mongoose.model("postModel",postSchema)

module.exports = postModel;