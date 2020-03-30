const uuidv4 = require('uuid/v4');

class Course {
    constructor(name, num, desc) {
        this._course_id = uuidv4();
        this._course_num = name;
        this._course_name = num;
        this._course_description = desc;
    }

}

module.exports = Course;
