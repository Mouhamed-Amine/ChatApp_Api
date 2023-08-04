const mongoose=require('mongoose');


const userSchema=mongoose.Schema(
{
        firstname:{
            type:String,
            required:[true,"please enter your first name"]
        },
        lastname:{
            type:String,
            required:[true,"please enter your nicnkame"]
        },
        email:{
            type:String,
            required:[true,"please enter your Personal email"]
        },
        profilePhoto:{
            type:String,
            required:[true,"please enter your password"]
        },
},
            {
                timestamp:true
            }
)

const user=mongoose.model('user',userSchema);

module.exports=user;