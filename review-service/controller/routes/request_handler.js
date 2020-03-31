/**
 * Routes for the micro service to respond to requests from core app
 */
const express = require('express');
const request_routes = express.Router();
const review_handler = require('../../model/review_handler');

request_routes.get('/get/:course_id', (req, res) => {
    console.log("route" + req.params.course_id);
    review_handler.getReviewsByCourseId(req.params.course_id)
        .then(result => {
            console.log(result);
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'unable to get reviews from course with id: ' + req.params.course_id});
            console.error(err);
        })
});

module.exports = request_routes;
