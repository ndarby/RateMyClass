/**
 * Model definition for Attributes
 */
const uuidv4 = require('uuid/v4');

class Attributes {
    constructor(course_id, rating, tags) {
        this._attribute_id = uuidv4();
        this._course_id = course_id;
        this._rating = rating;
        this._total = 1;
        this._tags = tags;
    }

    get attribute_id() {
        return this._attribute_id;
    }

    get course_id() {
        return this._course_id;
    }

    get rating() {
        return this._rating;
    }

    get tags() {
        return this._tags;
    }


    set rating(value) {
        this._rating = value;
    }

    set tags(value) {
        this._tags = value;
    }
}

module.exports = Attributes;
