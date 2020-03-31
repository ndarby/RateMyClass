const express = require('express');
const review_handler = require('../../model/reviews/review_projections');
const review_routes = express.Router();

review_routes.get('/get/:review_id', (req, res) => {
    let json = review_handler.reviewEventStream.getEventStream(req.params.review_id);
    res.json(json);
});
