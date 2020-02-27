/**
 * This is a basic demo file has one rooute a get request used by the React Demo
 */
const express = require('express');
const demo_routes = express.Router();

// An api endpoint that returns a short list of items
// Responds to /api/demo/getList
demo_routes.get('/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});


module.exports = demo_routes;
