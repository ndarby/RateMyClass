const es = require(global.PROJECT + '/model/es');
const uuidv4 = require('uuid/v4');

module.exports.reviewEventStream = {
    postNewReview: function (course_id, user_id, prof_name, review_title, review_body, rating, tags) {
        return new Promise(function (resolve, reject) {
            const review_id = uuidv4();
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'new_review',
                    data: {
                        review_id: review_id,
                        course_id: course_id,
                        user_id: user_id,
                        prof_name: prof_name,
                        review_title: review_title,
                        review_body: review_body,
                        rating: rating,
                        tags: tags,
                        date_posted: new Date().toISOString(),
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    editReviewTitle: function (review_id, new_review_title) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'edit_review_title',
                    data: {
                        review_id: review_id,
                        review_title: new_review_title
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    editReviewBody: function (review_id, new_review_body) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'edit_review_body',
                    data: {
                        review_id: review_id,
                        review_body: new_review_body
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    editProfName: function (review_id, new_prof_name) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'edit_prof_name',
                    data: {
                        review_id: review_id,
                        prof_name: new_prof_name
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    editRating: function (review_id, new_rating) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'edit_rating',
                    data: {
                        review_id: review_id,
                        rating: new_rating
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    editTags: function (review_id, new_tags) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'edit_tags',
                    data: {
                        review_id: review_id,
                        tags: new_tags
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    deleteReview: function (review_id) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_REVIEW,
                aggregate: review_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'delete_review',
                    data: {
                        review_id: review_id,
                    }
                });
                stream.commit();
                resolve(review_id);
            })
        })
    },

    getEventStream: function (review_id) {
        let json = {};
        es.getEvents({
            aggregateId: 'RATEMYCLASS',
            context: process.env.RMQ_EVENT_REVIEW,
            aggregate: review_id
        }, function (err, events) {
            json = events;
        });
        return json;
    },
};
