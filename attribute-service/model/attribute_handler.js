const Attribute = require('./attribute_class');
const db = require('../db');

module.exports = {
    updateRating: function(data) {
        db.getAttributeByCourseId(data.course_id).then(attributes => {
            if(attributes === null) {
                attributes = new Attribute(data.course_id, data.rating, data.tags);

                db.insertNewAttributes(attributes);
            } else {
                attributes._total++;
                attributes._rating -= -1*data.rating;
                attributes._tags = attributes._tags.concat(data.tags);

                db.updateAttributeById(attributes._attribute_id, attributes);
            }
        });
    },
    getAttributes: function(course_id) {
        return new Promise(function (resolve, reject) {
            db.getAttributeByCourseId(course_id).then(attributes => {
                resolve(attributes);
            }).catch(err => reject(err));
        });
    }
}
