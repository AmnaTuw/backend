const express = require("express");
const providerRouter = express.Router();
const {
  getAllProvider,
  getProvider,
  saveProvider,
  deleteProvider,
  updateProvider,
} = require("../Controllers/SerProviderControllers");
const { ServiceProvider } = require("../models/ServicesProvidersSchema");
providerRouter.get("/", getAllProvider);
providerRouter.post("/oneProvider", getProvider);
providerRouter.post("/save", saveProvider);
providerRouter.delete("/delete/:id", deleteProvider);
providerRouter.put("/update/:id", updateProvider);

module.exports = { serProRouters };