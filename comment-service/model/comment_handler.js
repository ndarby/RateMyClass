const Comment = require('./comment_class');
const db = require('../db');

module.exports = {
    generateNewComment: function (comment_data) {
        let comment = new Comment(comment_data.comment_id, course_id, comment_data.review_id, comment_data.user_id,
            comment_data.reply_id, comment_data.comment_body, comment_data.date_posted);
        db.insertNewComment(comment);
    },

    updateCommentBody: function (new_comment_data) {
        db.updateCommentById(new_comment_data.comment_id, {_comment_body: new_comment_data.comment_body});
    },

    deleteComment: function (comment_data) {
        db.deleteComment(comment_data.comment_id);
    },


};
