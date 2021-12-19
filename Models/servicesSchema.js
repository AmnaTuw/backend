const mongoose = require("mongoose");
const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
  },

  price: {
    type: Number,
  },
  providerName: {
    type: String,
  },
});

module.exports.Service = mongoose.model("Service", servicesSchema);
