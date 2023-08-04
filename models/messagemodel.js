const mongoose=require('mongoose');


const msgSchema=mongoose.Schema(
    {
        from:{
            type:String,
            required:true
        },
        to:{
            type:String,
            required:true
        },
        msgContent:{
            type:String,
            required:true
        },
        sentDateTime:{
            type:Date,
            required:true
        },
    },
    {
        timestamp:true
    }
)

const msg=mongoose.model('msg',msgSchema);

module.exports(msg);