const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ':' + process.env.MONGO_INITDB_ROOT_PASSWORD + '@' + process.env.MONGO_IP + ':' + process.env.MONGO_port + '/';

module.exports = {
    getReviewById: function (review_id) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("REVIEWS").findOne({_review_id: review_id}, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
            });
        });
    },
    updateReviewById: function (review_id, new_review_data) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            const new_values = {$set: new_review_data};

            dbo.collection("REVIEWS").updateOne({_review_id: review_id}, new_values, function (err, res) {
                if (err) {
                    throw err;
                }
                console.log("Updating review: ");
                console.log("id: " + review_id);
                console.log(new_values);
                db.close();
            });
        });
    },
    insertNewReview: function (review) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            dbo.collection("REVIEWS").insertOne(review, function (err) {
                if (err) {
                    throw err;
                }
                console.log("review document inserted");
                db.close();
            });
        });
    },
    deleteReview: function (review_id) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            dbo.collection("REVIEWS").deleteOne({_review_id: review_id}, function (err, res) {
                if (err) {
                    throw err;
                }
                console.log("Deleted review: ");
                console.log("id: " + review_id);
                db.close();
            });
        });
    }
};
