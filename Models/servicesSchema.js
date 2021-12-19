const mongoose = require("mongoose");
const servicesSchema = new  mongoose.Schema({
   serviceName: {
    type: String,required:true
  },
 imge: {
    type: String,required:true,unique:true
  },
  Desc: {
    type: String,
  },
 
 prise: {
    type: Number,
  },
});

module.exports.Services = mongoose.model("Services", servicesSchema);
