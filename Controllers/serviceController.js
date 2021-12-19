const Service = require('../Models/servicesSchema')


const addNewService = async function(){
    try{
        const newService = new Service({
            img: req.img,
            name: req.name,
            desc: req.desc,
            price: req.price,
            providerName: req.providerName
        })
        .then(newService.save())
    }catch(err){
        res.send(err.message).status(404)
    }   
}

const getAllServices = function(){
    res.send(Service)
}

module.exports = {addNewService, getAllServices}
