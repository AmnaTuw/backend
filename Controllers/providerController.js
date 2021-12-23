const { ServiceProvider } = require("../models/ServicesProvidersSchema");

//------------------------------------------------------//
//**            Get All Service Provider               **/
//------------------------------------------------------//

const getAllProvider = (req, res) => {
  ServiceProvider.find({ ServiceProvider })
    .then((ServiceProvider) => {
      console.log("ServiceProvider");
      res.status(200).json(ServiceProvider);
    })
    .catch((err) => {
      console.log(err);
    });
};
//------------------------------------------------------//
//**            Get One Service Provider               **/
//------------------------------------------------------//
const getProvider = (req, res) => {
  const { name } = req.body;
  ServiceProvider.findOne({ name: name })
    .then((ServiceProvider) => {
      if (ServiceProvider) {
        res.status(200).json(ServiceProvider);
      } else {
        res.status(404).json("Service Provider Not Found ");
      }
      return res;
    })
    .catch((err) => console.error(err));
};
//------------------------------------------------------//
//**                Save  Service Provider            **//
//------------------------------------------------------//

const saveProvider = (req, res) => {
  const { name, img, desc } = req.body;
  const newProvider = new ServiceProvider({
    name,
    img,
    desc,
  });
  newProvider
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err, "Error, Service Provider Can Not Saving ");
    });
};
//---------------------------------------------------------//
//**                Delete  Service Provider            **//
//------------------------------------------------------//

const deleteProvider = (req, res) => {
  const id = req.params.id;
  ServiceProvider.findByIdAndDelete(id)
    .then((resulte) => {
      res.status(201).json(resulte);
    })
    .catch((error) => {
      res.status(400).json(error, "Error, Service Provider Can  Not Delete");
    });
};
//------------------------------------------------------//
//**              UpDate  Service Provider            **/
//------------------------------------------------------//

const updateProvider = (req, res) => {
  const id = req.params.id;

  ServiceProvider.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((resulte) => {
      res.status(201).json(resulte);
    })
    .catch((error) => {
      res.status(400).json(error, "Error, Service Provider Can  Not update");
    });
};

module.exports = {
  getAllProvider,
  getProvider,
  saveProvider,
  deleteProvider,
  updateProvider,
};