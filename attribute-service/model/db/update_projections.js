/**
  Mongo model handler to manage retrieving items from the mongo DB
 */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ':' + process.env.MONGO_INITDB_ROOT_PASSWORD + '@' + process.env.MONGO_IP + ':' + process.env.MONGO_port + '/';
module.exports = {
    insertNewAttributes: function (attribute) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            dbo.collection("ATTRIBUTES").insertOne(attribute, function (err) {
                if (err) {
                    throw err;
                }
                console.log("attribute document inserted");
                db.close();
            });
        });
    },
    updateAttributeById: function (attribute_id, new_attribute_data) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                throw err;
            }
            let dbo = db.db("RATE-MY-CLASS");
            const new_values = {$set: new_attribute_data};

            dbo.collection("ATTRIBUTES").updateOne({_attribute_id: attribute_id}, new_values, function (err, res) {
                if (err) {
                    throw err;
                }
                console.log("Updating attribute: ");
                console.log("id: " + attribute_id);
                console.log(new_values);
                db.close();
            });
        });
    },
};
