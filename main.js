const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=3000;
var bodyParser=require('body-parser');
const users = require('./models/usermodel');


//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://amineakchouche:McRZ1wiiWZVQst8f@devchatapi.mvfm3ud.mongodb.net/Back_API?retryWrites=true&w=majority").
then(()=>
app.listen(port,()=>{
    console.log('app is listening on port : 3000' );
    }),
console.log('connected successfully')).catch(
    (err)=>{console.log(err);
    });





app.get('/',(req,res)=>{
    res.send("hi mate");
})


//Register and login
app.post('/user',async (req,res)=>{
   try {
     const client=await users.create(req.body)
     res.status(200).json(client);
   } catch (error) {
    console.log(error.message); 
    res.status(500).json({message:error.message})

   }
    
})

