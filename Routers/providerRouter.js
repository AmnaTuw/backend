const express = require("express");
const providerRouter = express.Router();
const {
  getAllProvider,
  getProvider,
  saveProvider,
  deleteProvider,
  updateProvider,
} = require("../Controllers/providerController");
const authorization = require("../Middleware/authorization");
providerRouter.get("/", getAllProvider);
providerRouter.post("/oneProvider", getProvider);
providerRouter.post("/save",authorization("providerOpr"), saveProvider);
providerRouter.delete("/delete/:id", deleteProvider);
providerRouter.put("/update/:id", updateProvider);

module.exports =  {providerRouter} 