const es = require(global.PROJECT + '/model/es');
const uuidv4 = require('uuid/v4');

module.exports.reviewEventInputStream = {
    getReviewByCourseId: function (review_id, course_id) {
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
};
