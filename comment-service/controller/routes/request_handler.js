/**
 * Routes for the micro service to respond to requests from core app
 */
const express = require('express');
const request_routes = express.Router();
const review_handler = require('../../model/comment_handler');

request_routes.get('/get/:review_id', (req, res) => {
    review_handler.getCommentsByReviewId(req.params.review_id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'unable to get comments from review with id: ' + req.params.review_id});
            console.error(err);
        })
});
request_routes.get('/whoami', (req, res) => {
    var list = ["this is the comment service"];
    res.json(list);
});


module.exports = request_routes;
