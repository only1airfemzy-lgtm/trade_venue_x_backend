const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")

router.post("/signup",async(req,res)=>{

const {username,email,password} = req.body

const hashed = await bcrypt.hash(password,10)

const user = new User({

username,
email,
password:hashed

})

await user.save()

res.json({message:"Account created"})

})

router.post("/login",async(req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user) return res.json({message:"User not found"})

const valid = await bcrypt.compare(password,user.password)

if(!valid) return res.json({message:"Wrong password"})

res.json({message:"Login successful",user})

})

module.exports = router