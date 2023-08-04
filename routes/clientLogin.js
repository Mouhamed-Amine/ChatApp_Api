const express=require('express');
const router=express.Router();

const clientlogin=require('..models/clientLogin');


router.post('/register',(req,res,next)=>{
    let newclient=new clientlogin({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
    });
clientlogin.addClient(newclient,(err,client)=>{
    if(err){
        res.json({success:false,msg:'Failed to register client'});
    }else{
        res.json({success:true,msg:' registered client'})
    }
})
})