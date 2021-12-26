const express = require('express')
const serviceRouter = express.Router()
const {addNewService, getAllServices} = require('../Controllers/serviceController')

serviceRouter.get('/', getAllServices)
serviceRouter.post('/add', addNewService)

module.exports = {serviceRouter} 