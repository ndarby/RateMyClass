/**
 * Model implementation for handling the logic of model integration
 */
const Comment = require('./comment_class');
const db_update = require('../model/db/update_projections');
const db_retrieve = require('../model/db/retrieve_projections');

module.exports = {
    generateNewComment: function (comment_data) {
        let comment = new Comment(comment_data.comment_id, comment_data.review_id,
            comment_data.user_id, comment_data.account_credentials, comment_data.parent_id, comment_data.comment_body, comment_data.date_posted);
        db_update.insertNewComment(comment);
    },

    updateCommentBody: function (new_comment_data) {
        db_update.updateCommentById(new_comment_data.comment_id, {_comment_body: new_comment_data.comment_body});
    },

    deleteComment: function (comment_data) {
        db_update.deleteComment(comment_data.comment_id);
    },

    getCommentsByReviewId: function (review_id) {
        // adapted from https://www.reddit.com/r/webdev/comments/95erzu/designing_a_reddit_like_comment_system/
        const nest = (comments, id = null) =>
            comments
                .filter(comment => comment._parent_id === id)
                .map(comment => ({...comment, children: nest(comments, comment._comment_id)}));
        return new Promise(function (resolve, reject) {
            db_retrieve.getCommentsByReviewId(review_id)
                .then(comments => resolve(nest(comments)))
                .catch(err => reject(err));
        });
    }
};
