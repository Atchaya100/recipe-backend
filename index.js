const express=require("express");
const app=express();
const cors=require('cors');
const parse=require('body-parser');
const connectDb=require('./db');
const router=require('./routes/MainRouter.js');
const port=3000;
app.use(cors());
app.use(express.json());
app.use(parse.urlencoded({extended:true}));
app.use('/api',router)
connectDb();
app.listen(port,()=>{
    console.log("server started");
})

