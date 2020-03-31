/**
 * Model implementation for handling the logic of model integration
 */
const Attribute = require('./attribute_class');
const db_update = require('../model/db/update_projections');
const db_retrieve = require('../model/db/retrieve_projections');

module.exports = {
    updateRating: function(data) {
        db_retrieve.getAttributeByCourseId(data.course_id).then(attributes => {
            if(attributes === null) {
                attributes = new Attribute(data.course_id, data.rating, data.tags);

                db_update.insertNewAttributes(attributes);
            } else {
                attributes._total++;
                attributes._rating -= -1*data.rating;
                attributes._tags = attributes._tags.concat(data.tags);

                db_update.updateAttributeById(attributes._attribute_id, attributes);
            }
        });
    },
    getAttributes: function(course_id) {
        return new Promise(function (resolve, reject) {
            db_retrieve.getAttributeByCourseId(course_id).then(attributes => {
                resolve(attributes);
            }).catch(err => reject(err));
        });
    }
}
