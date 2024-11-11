import User from '../models/userModel.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



export const google=async(req,res,next)=>{
 try {
  const {name,email,image}=req.body
  const user=await User.findOne({email})

  if(user){
    const token=jwt.sign({userId:user._id,email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_TIMEOUT})
    const {password,...rest}=user._doc
    res.status(200).cookie('access-token',token,{httpOnly:true}).json(rest)
  }else{
      
    const generatePasword=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8)
    const hashedPassword=bcrypt.hashSync(generatePasword,10)


  const newUser= await User.create({
                  name:name.toLowerCase().split(' ').join('')+ Math.random().toString(9).slice(-4),
                  email,
                  image,
                  password:hashedPassword
              })
       await newUser.save()
       const token=jwt.sign({userId:newUser._id,email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_TIMEOUT})
       const {password,...rest}=newUser._doc
       res.status(200).cookie('access-token',token,{httpOnly:true}).json(rest)
      
  }

 } catch (error) {
  next(error)
 }

}