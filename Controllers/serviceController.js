const {Service} = require('../Models/servicesSchema')


const addNewService =  (req, res)=>{
        const newService =   new Service({
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price
        })
        newService.save()
        .then((result)=>{
                res.json(result)
            })
    
    .catch((error)=>{
        console.log(error)
    })
}

const getAllServices = (req, res)=>{
    res.send(Service)
}

module.exports = {addNewService, getAllServices}
