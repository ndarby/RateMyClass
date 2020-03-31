/**
 * Routes for the micro service to respond to requests from core app
 */
const attribute_handler = require('../../model/attribute_handler');
const express = require('express');
const projection_routes = express.Router();

/**
 * Get the attributes for a course
 */
projection_routes.get('/get/:course_id', (req, res) => {
    attribute_handler.getAttributes(req.params.course_id).then(attributes => {
        console.log(attributes);
        tags = attributes._tags.filter(function(item, pos) {
            return attributes._tags.indexOf(item) === pos;
        })
        let tallied_attr = {
            course_id: attributes._course_id,
            rating: attributes._rating/attributes._total,
            tags: tags
        }
        res.json(tallied_attr);
    }).catch(err => {
        console.error(err);
        res.status(500).json({err: 'unable to retrieve attribute'});
    });
    console.log(req.params.course_id);
});



module.exports = projection_routes;
