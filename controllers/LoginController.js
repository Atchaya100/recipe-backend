const db=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv=require("dotenv");
dotenv.config();
const Login=db;

//create Account
const createAccount= async(req,res)=>{
    const password=req.body.password
    const hash= await bcrypt.hash(password,10)
    const email=req.body.email
    const username=req.body.username
    const user= await db.findOne({email:email})
    const user1= await db.findOne({username:username})
    let acc=new Login({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:hash,
    })
   if(user){
        res.status(200).json("Mail id already exists");
    }
    else if(user1){
        res.status(200).json("Username exists");
    }
    else{ 
        await acc.save();
        res.status(200).json("success")
   }
   
}
const checkLogin= async (req,res)=>{

    const {email,password}=req.body
    try{
    const user=await db.findOne({email:email});
        if(!user){
             res.json("wrong mailid")
         }
         else{
        const isValid=await bcrypt.compare(password,user.password)
        if(!isValid){
            res.json("wrong password")
        }
        if(user && isValid){
            jwt.sign({email},process.env.secret_key,async (err,token,authData)=>{
                res.json({token:token,authData:user})
                
            })
       
        }}
   
    }
    catch(e){
        console.log("error:",e)
    }
 
        
    }

function verifyToken(req,res,next){
    //get auth header value
    const bearerHeader=req.headers['authorization']
    //check if bearer is not undefined
    if(typeof bearerHeader!="undefined"){
       //token looks like-> Authorization: Bearer <token>
       const bearer=bearerHeader.split(' ')
       const bearerToken=bearer[1]
       req.token=bearerToken
       //next middleware
       next()
    }
    else{
        res.status(403).json("Authentication error!!!");
    }
}
module.exports={createAccount,checkLogin,verifyToken}