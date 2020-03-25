const express = require('express');
const comment_handler = require('../../model/comments/comment_events');
const comment_routes = express.Router();

comment_routes.post('/new', (req, res) => {
    let params = req.body;
    comment_handler.commentEventStream.postNewComment(params.course_id, params.review_id, params.user_id, params.reply_id, params.comment_body)
        .then(result => res.json('comment with id ' + result + ' created successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to create comment'});
            console.error(err);
        })
});

comment_routes.get('/get/:comment_id', (req, res) => {
    let json = comment_handler.commentEventStream.getEventStream(req.params.comment_id);
    res.json(json);
});

comment_routes.delete('/delete', (req, res) => {
    let params = req.body;
    comment_handler.commentEventStream.deleteComment(params.comment_id)
        .then(result => res.json('comment with id ' + result + ' deleted successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to delete comment'});
            console.error(err);
        })
});

comment_routes.post('/edit/comment_body', (req, res) => {
    let params = req.body;
    comment_handler.commentEventStream.editCommentBody(params.comment_id, params.comment_body)
        .then(result => res.json('comment with id ' + result + ' edited comment comment_body successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to edit comment comment_body'});
            console.error(err);
        })
});

module.exports = comment_routes;
