const express = require('express')
const userRouter = express.Router()
const {getUser, addNewUser} = require('../Controllers/userController')

userRouter.post('./register', addNewUser)
userRouter.post('./login', getUser)

module.exports = {userRouter}