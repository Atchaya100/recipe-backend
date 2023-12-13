const db=require('../models/Comment');

const jwt=require('jsonwebtoken');
const dotenv=require("dotenv");
dotenv.config();
const Comment=db;

const createComment=async(req,res)=>{
    let comment=new Comment({ 
           rid:req.body.rid,
           name:req.body.name,
           comment:req.body.comment
        })
        jwt.verify(req.token,process.env.secret_key,async (err,authData)=>{
            if(err){
                res.sendStatus(403)
            }else{
                const u=await comment.save();
                res.status(200).send(u);
                
            }
        })
}
const getComments=async(req,res)=>{
    const id=req.params.id
    try{   
        const u=await db.find({rid:id});
        res.status(200).send(u);
        
    }
    catch(e){
        console.log(e)
    }
}

module.exports={createComment,getComments}