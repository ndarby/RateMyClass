/**
 * Model implementation for handling the logic of model integration
 */
const Review = require('./review_class');
const db_request = require('./db/retrieve_projections');
const db_update = require('./db/update_projections');

module.exports = {
    generateNewReview: function (review_data) {
        let review = new Review(review_data.review_id, review_data.course_id, review_data.user_id, review_data.account_credentials,
            review_data.prof_name, review_data.review_title, review_data.review_body, review_data.rating,
            review_data.tags, review_data.date_posted);
        db_update.insertNewReview(review);
    },

    updateReviewTitle: function (new_review_data) {
        db_update.updateReviewById(new_review_data.review_id, {_review_title: new_review_data.review_title});
    },

    updateReviewBody: function (new_review_data) {
        db_update.updateReviewById(new_review_data.review_id, {_review_body: new_review_data.review_body});
    },

    updateProfName: function (new_review_data) {
        db_update.updateReviewById(new_review_data.review_id, {_prof_name: new_review_data.prof_name});
    },

    updateRating: function (new_review_data) {
        db_update.updateReviewById(new_review_data.review_id, {_rating: new_review_data.rating});
    },

    updateTags: function (new_review_data) {
        db_update.updateReviewById(new_review_data.review_id, {_tags: new_review_data.tags});
    },

    deleteReview: function (review_data) {
        db_update.deleteReview(review_data.review_id);
    },

    getReviewsByCourseId: function (course_id) {
        return new Promise(function (resolve, reject) {
            db_request.getReviewsByCourseId(course_id)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

};
