const mongoose=require('mongoose')
const recipeSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    benefits:{
        type:String,
        required:true
    }
},
{
    collection:"Recipe"
});
module.exports=mongoose.model("Recipe",recipeSchema);