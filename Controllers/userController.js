const mongoose = require('mongoose')
const User = require('../Models/userSchema')

const addNewUser = async function(){
    const newUser = new User({
        email = req.email,
        password = req.password
    })
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
}

const getUser = function(){
    const findUser = await User.findOne({email: req.body.email, password: req.body.password})
    if(!findUser){
        res.status(404).json('user not found, if you did not register before, register first')
    }else{
        res.send(findUser).status(201)
    }
}


module.exports = {addNewUser, getUser}