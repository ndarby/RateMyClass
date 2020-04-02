const express = require('express');
const projection_routes = express.Router();
const request = require("request");
const {getAccountByAccountId} = require("../../model/db");

projection_routes.get('/get/:course_id', (req, res) => {
    let options = {
        method: 'GET',
        url: 'http://' + process.env.post_service_IP + ':' + process.env.post_service_PORT + '/api/projections/get/' + req.params.course_id,
        timeout: 10000
    };

    function asyncFunction(review, cb) {
        setTimeout(() => {
            getAccountByAccountId(review._user_id)
                .then(account => {
                    review._account_credentials = {
                        _first_name: account._first_name,
                        _last_name: account._last_name
                    };
                    cb();
                })
                .catch(err => reject(err));
        }, 1000)
    }

    request(options, function (error, response, body) {
        if (error) {
            res.status(500).json({err: 'unable to retrieve reviews for course with id ' + req.params.course_id});
        } else {
            if (body === undefined) {
                res.status(408).json({err: 'unable to retrieve reviews for course with id ' + req.params.course_id + ' - timeout'});
            }
            const reviews = JSON.parse(body);
            let requests = reviews.reduce((promiseChain, review) => {
                return promiseChain.then(() => new Promise((resolve) => {
                    asyncFunction(review, resolve);
                }));
            }, Promise.resolve());
            requests.then(() => {
                res.json(reviews);
                console.log(reviews);
            }).catch(err => res.status(408).json({err: 'unable to retrieve comments for courde with id ' + req.params.course_id + ' - timeout'}));
        }
    });
});

module.exports = projection_routes;
