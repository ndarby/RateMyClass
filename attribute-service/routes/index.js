/**
 *  This file is the main directory of the API routes
 *  Each new sub url (/api/...) needs to be added here
 */
const express = require('express');
const api_routes = express.Router();

/*
    Duplicate this line and update it for any new routes required.
    This line makes all routes in the ./demo.js file respond to /api/demo/...
 */
api_routes.use("/demo/", require("./demo"));

module.exports = api_routes;
