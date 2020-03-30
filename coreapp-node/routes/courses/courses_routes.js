const express = require('express');
const course_handler = require('../../model/courses/course_handler');
const course_routes = express.Router();

course_routes.post('/new', (req, res) => {
    let params = req.body;
    course_handler.addNewCourse(params.name, params.num, params.desc).then(result => res.json('course created successfully'))
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

//
// account_routes.post('/edit', (req, res) => {
//     let params = req.body;
//     account_handler.editAccount(params.account_id, params.data).then(result => res.json('account updated successfully'))
//         .catch(err => {
//             res.status(500).json({err: 'unable to update account'});
//             console.error(err);
//         })
// });
//
// account_routes.post('/authenticate', (req, res) => {
//     let params = req.body;
//     account_handler.authenticateLogin(params.mail, params.word).then(result => {
//         if(result === "no_auth") {
//             res.status(403).json({err: 'Invalid Login Credentials'});
//         } else {
//             res.json(result)
//         }
//     })
//         .catch(err => {
//             res.status(500).json({err: 'unable to login account'});
//             console.error(err);
//         })
// });
//
//

module.exports = course_routes;
