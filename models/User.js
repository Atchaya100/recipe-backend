const mongoose=require('mongoose');
const db = require('./Recipe');
const Recipe=db;
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    recipes:{
        type:[{
            _id:String,
            author:String,
            name:String,
            category:String,
            time:String,
            ingredients:String,
            instructions:String,
            benefits:String
        }]
    },
    saved:{
        type:[{}]
    }
},
{
    collection:"User"
});
module.exports=mongoose.model("User",userSchema);