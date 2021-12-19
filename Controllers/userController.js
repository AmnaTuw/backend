const mongoose = require('mongoose')
const {User} = require('../Models/userSchema')

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
    const findUser = await User.findOne({email: req.body.email, password: req.body.password})
    if(!findUser){
        res.status(404).json('user not found, if you did not register before, register first')
    }else{
        res.send(findUser).status(201)
    }
}


module.exports = {addNewUser, getUser}