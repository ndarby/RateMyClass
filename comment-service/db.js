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
    updateCommentById: function (comment_id, new_comment_data) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            const new_values = {$set: new_comment_data};

            dbo.collection("COMMENTS").updateOne({_comment_id: comment_id}, new_values, function (err, res) {
                if (err) {
                    throw err;
                }
                console.log("Updating comment: ");
                console.log("id: " + comment_id);
                console.log(new_values);
                db.close();
            });
        });
    },
    insertNewComment: function (comment) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            dbo.collection("COMMENTS").insertOne(comment, function (err) {
                if (err) {
                    throw err;
                }
                console.log("comment document inserted");
                db.close();
            });
        });
    },
    deleteComment: function (comment_id) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            dbo.collection("COMMENTS").deleteOne({_comment_id: comment_id}, function (err, res) {
                if (err) {
                    throw err;
                }
                console.log("Deleted comment: ");
                console.log("id: " + comment_id);
                db.close();
            });
        });
    }
};
