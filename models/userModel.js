import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  image:{
    type:String,
    default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  password:{
    type:String,
    required:true
  }
},
{timestamps:true}
)





const User=mongoose.model('User',userSchema)

export default User