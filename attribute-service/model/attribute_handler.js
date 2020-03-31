const Attribute = require('./attribute_class');
const db = require('../db');

module.exports = {
    updateRating: function(data) {
        db.getAttributeByCourseId(data.course_id).then(attributes => {
            if(attributes === null) {
                attributes = new Attribute(data.course_id, data.rating, data.tags);
                console.log(attributes);

                db.insertNewAttributes(attributes);
            } else {
                attributes._total++;
                attributes._rating -= -1*data.rating;
                attributes._tags = attributes._tags.concat(data.tags);
                console.log(attributes);

                db.updateAttributeById(attributes._attribute_id, attributes);
            }
        });


    }
}
