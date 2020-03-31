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
api_routes.use("/reviews/", require("./producing/review_events"));
api_routes.use("/comments/", require("./producing/comment_events"));
api_routes.use("/accounts/", require("./accounts/account_validation"));
api_routes.use("/courses/", require("./courses/courses_routes"));
api_routes.use("/attributes_get/", require("./requesting/attribute_projections"));
api_routes.use("/reviews_get/", require("./requesting/review_projections"));

module.exports = api_routes;
