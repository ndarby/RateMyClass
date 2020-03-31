const express = require('express');
const course_handler = require('../../model/courses/course_handler');
const course_routes = express.Router();

course_routes.post('/new', (req, res) => {
    let params = req.body;
    course_handler.addNewCourse(params.name, params.num, params.desc, params.images).then(result => res.json('course created successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to create course'});
            console.error(err);
        })
});

course_routes.get('/get', (req, res) => {
    course_handler.getAllCourses().then(result => res.json(result))
        .catch(err => {
            res.status(500).json({err: 'unable to retrieve courses'});
            console.error(err);
        })
});

course_routes.get('/get/:id', (req, res) => {
    course_handler.getSingleCourse(req.params.id).then(result => res.json(result))
        .catch(err => {
            res.status(500).json({err: 'unable to retrieve course'});
            console.error(err);
        })
});

module.exports = course_routes;
