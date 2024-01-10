const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    postId : String,
    author : String ,
    comment :String
},{
    timestamps:true
})

const commentModel = mongoose.model("commentModel",commentSchema)

module.exports = commentModel;