const es = require(global.PROJECT + '/model/es');
const uuidv4 = require('uuid/v4');
const comment_helpers = require("./comment_helpers");

module.exports.commentEventStream = {
    postNewComment: function (review_id, user_id, parent_id, comment_body) {
        return new Promise(function (resolve, reject) {
            const comment_id = uuidv4();
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_COMMENT,
                aggregate: comment_id
            }, (err, stream) => {
                if (err) {
                    reject(err)
                }
                let account = null;
                comment_helpers.getCommentAccountByUserId(user_id)
                    .then(result => {
                        account = result;
                        stream.addEvent({
                            action: 'new_comment',
                            data: {
                                comment_id: comment_id,
                                review_id: review_id,
                                user_id: user_id,
                                account_credentials: {
                                    first_name: account._first_name,
                                    last_name: account._last_name
                                },
                                parent_id: parent_id,
                                comment_body: comment_body,
                                date_posted: new Date().toISOString()
                            }
                        });
                        stream.commit();
                        resolve(comment_id);
                    })
                    .catch((err) => {
                        console.log(err);
                        reject(err)
                    });
            })
        })
    },

    editCommentBody: function (comment_id, new_comment_body) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_COMMENT,
                aggregate: comment_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'edit_comment_body',
                    data: {
                        comment_id: comment_id,
                        comment_body: new_comment_body
                    }
                });
                stream.commit();
                resolve(comment_id);
            })
        })
    },

    deleteComment: function (comment_id) {
        return new Promise(function (resolve, reject) {
            es.getEventStream({
                aggregateId: 'RATEMYCLASS',
                context: process.env.RMQ_EVENT_COMMENT,
                aggregate: comment_id
            }, (err, stream) => {
                if (err) {
                    reject(err);
                }
                stream.addEvent({
                    action: 'delete_comment',
                    data: {
                        comment_id: comment_id,
                    }
                });
                stream.commit();
                resolve(comment_id);
            })
        })
    },

    getEventStream: function (comment_id) {
        let json = {};
        es.getEvents({
            aggregateId: 'RATEMYCLASS',
            context: process.env.RMQ_EVENT_COMMENT,
            aggregate: comment_id
        }, function (err, events) {
            json = events;
        });
        return json;
    },
};

