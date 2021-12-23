const express = require('express')
const {User} = require('../Models/userSchema')
const userRouter = express.Router()
const {getUser, addNewUser} = require('../Controllers/userController')
const {authorization } = require('../Middleware/authorization')
const {authentication } = require('../Middleware/authentication')
const { Role } = require('../Models/RoleSchema')

userRouter.post('/register', addNewUser)
userRouter.post('/login', getUser)
userRouter.post("/role", (req,res)=>{
    const {role, permissions} = req.body;
    const newRole = new Role({
        role,
        permissions
    })

    newRole.save()
    .then(result =>{
        res.status(201).json(result)
    }).catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})
module.exports = {userRouter}