const Review = require('./review_class');
const db = require('../db');

module.exports = {
    generateNewReview: function (review_data) {
        let review = new Review(review_data.review_id, review_data.course_id, review_data.user_id,
            review_data.prof_name, review_data.review_title, review_data.review_body, review_data.rating,
            review_data.tags, review_data.date_posted);
        db.insertNewReview(review);
    },

    updateReviewTitle: function (new_review_data) {
        db.updateReviewById(new_review_data.review_id, {_review_title: new_review_data.review_title});
    },

    updateReviewBody: function (new_review_data) {
        db.updateReviewById(new_review_data.review_id, {_review_body: new_review_data.review_body});
    },

    updateProfName: function (new_review_data) {
        db.updateReviewById(new_review_data.review_id, {_prof_name: new_review_data.prof_name});
    },

    updateRating: function (new_review_data) {
        db.updateReviewById(new_review_data.review_id, {_rating: new_review_data.rating});
    },

    updateTags: function (new_review_data) {
        db.updateReviewById(new_review_data.review_id, {_tags: new_review_data.tags});
    },

    deleteReview: function (review_data) {
        db.deleteReview(review_data.review_id);
    },

    getReviewsByCourseId: function (review_data) {
        return new Promise(function (resolve, reject) {
            db.getReviewByCourseId(review_data.course_id)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

};
