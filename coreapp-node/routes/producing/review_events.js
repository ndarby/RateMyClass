const express = require('express');
const review_handler = require('../../model/reviews/review_events');
const review_routes = express.Router();

review_routes.post('/new', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.postNewReview(params.course_id, params.user_id, params.prof_name, params.review_title, params.review_body, params.rating, params.tags)
        .then(result => res.json('review with id ' + result + ' created successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to create review'});
            console.error(err);
        })
});

review_routes.get('/get/:review_id', (req, res) => {
    let json = review_handler.reviewEventStream.getEventStream(req.params.review_id);
    res.json(json);
});

review_routes.delete('/delete', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.deleteReview(params.review_id)
        .then(result => res.json('review with id ' + result + ' deleted successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to delete review'});
            console.error(err);
        })
});

review_routes.post('/edit/review_title', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.editReviewTitle(params.review_id, params.review_title)
        .then(result => res.json('review with id ' + result + ' edited review review_title successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to edit review review_title'});
            console.error(err);
        })
});

review_routes.post('/edit/review_body', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.editReviewBody(params.review_id, params.review_body)
        .then(result => res.json('review with id ' + result + ' edited review review_body successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to edit review review_body'});
            console.error(err);
        })
});

review_routes.post('/edit/prof_name', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.editProfName(params.review_id, params.prof_name)
        .then(result => res.json('review with id ' + result + ' edited review prof_name successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to edit review prof_name'});
            console.error(err);
        })
});

review_routes.post('/edit/rating', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.editRating(params.review_id, params.rating)
        .then(result => res.json('review with id ' + result + ' edited review rating successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to edit review rating'});
            console.error(err);
        })
});

review_routes.post('/edit/tags', (req, res) => {
    let params = req.body;
    review_handler.reviewEventStream.editTags(params.review_id, params.tags)
        .then(result => res.json('review with id ' + result + ' edited review tags successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to edit review tags'});
            console.error(err);
        })
});

module.exports = review_routes;
