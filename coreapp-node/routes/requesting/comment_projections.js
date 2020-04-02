const express = require('express');
const projection_routes = express.Router();
const request = require("request");
const {getAccountByAccountId} = require("../../model/db");

projection_routes.get('/get/:review_id', (req, res) => {
    let options = {
        method: 'GET',
        url: 'http://' + process.env.comment_service_IP + ':' + process.env.comment_service_PORT + '/api/projections/get/' + req.params.review_id,
        timeout: 10000
    };

    function asyncFunction(comment, cb) {
        setTimeout(() => {
            getAccountByAccountId(comment._user_id)
                .then(account => {
                    comment._account_credentials = {
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
            res.status(500).json({err: 'unable to retrieve comments for review with id ' + req.params.review_id});
        } else {
            if (body === undefined) {
                res.status(408).json({err: 'unable to retrieve comments for review with id ' + req.params.review_id + ' - timeout'});
            }
            let comments = JSON.parse(body);
            let requests = comments.reduce((promiseChain, review) => {
                return promiseChain.then(() => new Promise((resolve) => {
                    asyncFunction(review, resolve);
                }));
            }, Promise.resolve());
            requests.then(() => {
                new Promise(function (resolve, reject) {
                    const nest = (items, id = null) =>
                        items
                            .filter(item => item._parent_id === id)
                            .map(item => ({ ...item, children: nest(items, item._comment_id) }));

                    const comments_new = Array.from(comments);
                    const nestedComments = nest(comments_new);
                    resolve(nestedComments)
                }).then(result => res.json(result))
            }).catch(() => res.status(408).json({err: 'unable to retrieve comments for review with id ' + req.params.review_id + ' - timeout'}));
        }
    });
});


module.exports = projection_routes;
