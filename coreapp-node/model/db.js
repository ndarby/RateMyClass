const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ':' + process.env.MONGO_INITDB_ROOT_PASSWORD + '@' + process.env.MONGO_IP + ':' + process.env.MONGO_port + '/';

module.exports = {
    addNewAccount: function (account) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("ACCOUNTS").insertOne(account, function (err) {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                    db.close();
                });
            });
        });
    },
    updateAccount: function (account_id, data) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("ACCOUNTS").updateOne({_account_id: account_id}, {$set: data}, function (err) {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                    db.close();
                });
            });
        });
    },
    getAccount: function (email, password_hash) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("ACCOUNTS").findOne({_email: email, _password_hash: password_hash}, function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                    db.close();
                });
            });
        });
    },
    addNewCourse: function (course) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("COURSES").insertOne(course, function (err) {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                    db.close();
                });
            });
        });
    },
    getAllCourses: function () {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("COURSES").find({}).toArray(function(err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    db.close();
                });
            });
        });
    },
    getSingleCourse: function (course_id) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    reject(err);
                }
                let dbo = db.db("RATE-MY-CLASS");
                dbo.collection("COURSES").findOne({_course_id: course_id}, function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    resolve(res);
                    db.close();
                });
            });
        });
    }
};
