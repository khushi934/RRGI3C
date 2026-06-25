const Users= require('../models/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SECRET= "BharathReddy"

const login = async(req,res)=>{
    const {email,password} =req.body

    if(!email || !password){
return res.status(401).json({message:"Both Email and Password Necessary"})
    }

try {

    const userData = await Users.findOne({email})
    
    const isMatch = await bcrypt.compare(req.body.password , userData.password)
    if(!isMatch){
        return res.status(400).json("Password missmatch")
    }
    const token = jwt.sign({email:userData.email , id:userData._id},SECRET,{expiresIn:'1m'})
    if(!email)
    {
        return res.status(400).json({message:"Email Not found Please Register"})
    }
    if(userData.role === "Teacher"){
return res.status(200).json({mesaage:"welcome Teacher",userData,token})
    }
    res.status(200).json({message:"Login Sucessfull" ,userData,token})
} catch (error) {
    res.status(400).json(error)
}
}

const register = async(req,res)=>{
try {
    const addUser = await Users.create(req.body)
    res.status(201).json({message:"User added Sucessfully u Can login now" , addUser})
} catch (error) {
    res.status(400).json(error)
}
}

const dashboard = async(req,res)=>{
try {
    const userProfile = await Users.findById(req.params.id)
    res.status(200).json({message:`${userProfile.name} - ${userProfile.role}`})
} catch (error) {
    res.status(400).json(error)
}
}

const uploadFiles = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded. Use multipart/form-data with field name "image".' })
        }

        return res.status(200).json({
            message: 'File uploaded',
            file: {
                originalName: req.file.originalname,
                mimeType: req.file.mimetype,
                size: req.file.size,
                url: req.file.path || req.file.location || req.file.secure_url
            }
        })
    } catch (error) {
        console.error('Upload error:', error)
        return res.status(500).json({
            message: 'Upload failed',
            error: error.message || error,
            stack: error.stack
        })
    }
}

module.exports = {login, register, dashboard, uploadFiles }
