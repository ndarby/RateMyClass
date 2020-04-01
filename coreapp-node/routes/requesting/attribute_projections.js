const express = require('express');
const projection_routes = express.Router();
const request = require("request");


projection_routes.get('/get/:course_id', (req, res) => {

    let options = {
        method: 'GET',
        url: 'http://' + process.env.attribute_service_IP +':'+ process.env.attribute_service_PORT + '/api/projections/get/'+ req.params.course_id,
        timeout: 10000
    };

    request(options, function (error, response, body) {
        if (error) {
            res.status(500).json({err: 'unable to retrieve attribute'});
        } else {
            if(body === undefined) {
                res.status(408).json({err: 'unable to retrieve attribute - timeout'});
            }
            res.json(JSON.parse(body));
        }


    });

});

module.exports = projection_routes;
