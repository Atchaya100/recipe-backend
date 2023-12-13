const db=require('../models/Recipe');
const db1=require('../models/User');
const jwt=require('jsonwebtoken');
const dotenv=require("dotenv");
dotenv.config();
const Recipe=db;
const Login=db1;

const createRecipe=async(req,res)=>{
    let recipe=new Recipe({
        author:req.body.author,
        name:req.body.name,
        category:req.body.category,
        time:req.body.time,
        ingredients:req.body.ingredients,
        instructions:req.body.instructions,
        benefits:req.body.benefits
        })
        jwt.verify(req.token,process.env.secret_key,async (err,authData)=>{
            if(err){
                res.sendStatus(403)
            }else{
                const author=req.body.author;
                const u=await recipe.save();
                res.status(200).send(u);
                
            }
       
        })
}
const updateRecipe=async(req,res)=>{
    let recipe=Recipe({
        _id:req.params.id,
        author:req.body.author,
        name:req.body.name,
        category:req.body.category,
        time:req.body.time,
        ingredients:req.body.ingredients,
        instructions:req.body.instructions,
        benefits:req.body.benefits
        })
        const id=req.params.id
        jwt.verify(req.token,process.env.secret_key,async (err,authData)=>{
            if(err){
                res.sendStatus(403)
            }else{
                const u=await db.updateOne({_id:id},{$set:recipe})
                res.status(200).send(u);
            }
        })
   
}
const findAll=async(req,res)=>{
   
        const id=req.params.id
           try{
                const u=await db.find();
                res.status(200).send(u);
                
            }
            catch(e){
                console.log(e)
            }
       
        
   
}
const findOne=async(req,res)=>{
   
    const id=req.params.id
    
        try{    const u=await db.findOne({_id:id});
            res.status(200).send(u);
            
        }
        catch(e){
            console.log(e)
        }
  

}
const findByAuthor=async(req,res)=>{
   
    const author=req.params.author
    jwt.verify(req.token,process.env.secret_key,async (err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            const u=await db.find({author:author});
            res.status(200).send(u);
            
        }
   
    })

}
const deleteRecipe=async(req,res)=>{
   
    const id=req.params.id
    jwt.verify(req.token,process.env.secret_key,async (err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            const u=await db.deleteOne({_id:id});
            res.status(200).send(u);
            
        }
   
    })

}
module.exports={createRecipe,updateRecipe,findAll,deleteRecipe,findByAuthor,findOne}

