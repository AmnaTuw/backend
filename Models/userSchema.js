const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  // role: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: "Role",
  //   default: "",
  // }
});
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports.User = mongoose.model("User", userSchema);
//isEmail
