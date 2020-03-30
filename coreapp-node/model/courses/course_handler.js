const uuidv4 = require('uuid/v4');
const Course = require('./course_class');
const db = require('../db');

module.exports = {
    addNewCourse: function(name, num, desc, imgs) {
        return new Promise(function (resolve, reject) {
            let course = new Course(name, num, desc, imgs);
            db.addNewCourse(course).then(() => {resolve();}).catch(err => {reject(err);});
        });
    },

    getAllCourses: function() {
        return new Promise(function (resolve, reject) {
            db.getAllCourses().then((result) => {resolve(result);}).catch(err => {reject(err);});
        });
    },

    getSingleCourse: function(course_id) {
        return new Promise(function (resolve, reject) {
            db.getSingleCourse(course_id).then((result) => {resolve(result);}).catch(err => {reject(err);});
        });
    }
};
