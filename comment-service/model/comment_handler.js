/**
 * Model implementation for handling the logic of model integration
 */
const Comment = require('./comment_class');
const db_update = require('../model/db/update_projections');
const db_retrieve = require('../model/db/retrieve_projections');

module.exports = {
    generateNewComment: function (comment_data) {
        let comment = new Comment(comment_data.comment_id, comment_data.review_id,
            comment_data.user_id, comment_data.parent_id, comment_data.comment_body, comment_data.date_posted);
        db_update.insertNewComment(comment);
    },

    updateCommentBody: function (new_comment_data) {
        db_update.updateCommentById(new_comment_data.comment_id, {_comment_body: new_comment_data.comment_body});
    },

    deleteComment: function (comment_data) {
        db_update.deleteComment(comment_data.comment_id);
    },

    getCommentsByReviewId: function (review_id) {
        return new Promise(function (resolve, reject) {
            db_retrieve.getCommentsByReviewId(review_id)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }
};
