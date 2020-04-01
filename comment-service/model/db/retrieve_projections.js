/**
 * Mongo model handler to manage getting items from the mongo DB
 */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ':' + process.env.MONGO_INITDB_ROOT_PASSWORD + '@' + process.env.MONGO_IP + ':' + process.env.MONGO_port + '/';

module.exports = {
    getCommentById: function (comment_id) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("COMMENTS").findOne({_comment_id: comment_id}, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
            });
        });
    },

    getCommentsByReviewId: function (review_id) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("COMMENTS").find({_review_id: review_id}).toArray(function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
            });
        });
    }
}
