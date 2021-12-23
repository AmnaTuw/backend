const mongoose = require('mongoose')
const {User} = require('../Models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const addNewUser= async (req, res)=>{
    const newUser = new User({
        email : req.body.email,
        password : req.body.password
    })
    try {
        const findUser = await User.findOne({email: req.body.email})
        if(findUser){
            res.status(404).json('user already exsist')
        }else{
            newUser.save().then(result=>{
                res.status(201).json(result)
            }).catch(err=>{
                res.status(404).json(err.message)
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (req, res)=>{
    const findUser = await User.findOne({email: req.body.email})
    //  console.log(findUser)
    if(!findUser){
        res.status(404).json('user not found, if you did not register before, register first')
    }else{
        const compared = await bcrypt.compare(req.body.password, findUser.password)
        if(compared){
            //generate the token
            //send token along with user info to front end
            // console.log(compared)
            const payloud = {
                userId: findUser._id,
                role: findUser.role
            }
            // console.log(payloud)
            const options = {
                expiresIn: "4h"
            }
            const secret = process.env.SECRET
            // console.log(secret)
            const token = jwt.sign(payloud, secret, options)
            // console.log(token)
            
           return res.status(200).json({ token: token,user:findUser})
        }else{
            res.status(404).json('uncorrect password!')
        }
    }
}


module.exports = {addNewUser, getUser}