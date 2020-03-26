const Comment = require('./comment_class');
const db = require('../db');

//comment_id, course_id, review_id, user_id, reply_id, comment_body, date_posted
module.exports = {
    generateNewComment: function (comment_data) {
        let comment = new Comment(comment_data.comment_id, comment_data.course_id, comment_data.review_id,
            comment_data.user_id,comment_data.reply_id, comment_data.comment_body, comment_data.date_posted);
        db.insertNewComment(comment);
    },

    updateComment: function(new_comment_data){
        db.updateComment(new_comment_data.comment_id, {_comment_body: new_comment_data.comment_body});
    },
    
    deleteComment: function (comment_data) {
        db.deleteComment(comment_data.comment_id);
    },


};
