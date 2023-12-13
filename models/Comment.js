const mongoose=require('mongoose')
const commentSchema = new mongoose.Schema({
    
    rid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},
{
    collection:"Comment"
});
module.exports=mongoose.model("Comment",commentSchema);