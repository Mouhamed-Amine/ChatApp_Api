const mongoose=require('mongoose');


const clientLoginSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {
        timestamp:true
    }
)

const client=mongoose.model('clientLogin',clientLoginSchema);

//method2:Great
module.exports.getClientByID=function(id,callback){
    client.findById(id,callback);
}
module.exports.getClientByUsername=function(username,callback){
    const query={username:username}
    client.findOne(query,callback);
}
module.exports.addClient=function(newclient,callback){
    client.save(newclient);
}