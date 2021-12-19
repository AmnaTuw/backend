const express = require('express')
const {User} = require('../Models/userSchema')
const userRouter = express.Router()
const {getUser, addNewUser} = require('../Controllers/userController')

userRouter.post('/register', addNewUser)
userRouter.post('/login', getUser)

module.exports = {userRouter}