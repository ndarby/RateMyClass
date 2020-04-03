const express = require('express');
const projection_routes = express.Router();
const request = require("request");

projection_routes.get('/get/:review_id', (req, res) => {
    let options = {
        method: 'GET',
        url: 'http://' + process.env.comment_service_IP + ':' + process.env.comment_service_PORT + '/api/projections/get/' + req.params.review_id,
        timeout: 10000
    };
    request(options, function (error, response, body) {
        if (error) {
            res.status(500).json({err: 'unable to retrieve comments for review with id ' + req.params.review_id });
        } else {
            if (body === undefined) {
                res.status(408).json({err: 'unable to retrieve comments for review with id ' + req.params.review_id + ' - timeout'});
            }
            res.json(JSON.parse(body));
        }
    });
});

module.exports = projection_routes;
