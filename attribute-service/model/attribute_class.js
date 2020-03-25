class Attributes {
    constructor(attribute_id, course_id, rating, tags) {
        this._attribute_id = attribute_id;
        this._course_id = course_id;
        this._rating = rating;
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
}

module.exports = Attributes;
