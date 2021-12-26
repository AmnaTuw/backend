const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  name: {
    type: String,required:true
  },
 img: {
    type: String,required:true
  },
  desc: {
    type: String,
  },
});
module.exports.ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);
