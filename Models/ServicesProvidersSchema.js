const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  name: {
    type: String,required:true
  },
 imge: {
    type: String,required:true,unique:true
  },
  Desc: {
    type: String,
  },
});
module.exports.ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);
