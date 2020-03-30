const express = require('express');
const account_handler = require('../../model/accounts/account_handler');
const account_routes = express.Router();

account_routes.post('/new', (req, res) => {
    let params = req.body;
    account_handler.addNewAccount(params.first, params.last, params.mail, params.word).then(result => res.json('account created successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to create account'});
            console.error(err);
        })
});

account_routes.post('/edit', (req, res) => {
    let params = req.body;
    account_handler.editAccount(params.account_id, params.data).then(result => res.json('account updated successfully'))
        .catch(err => {
            res.status(500).json({err: 'unable to update account'});
            console.error(err);
        })
});

account_routes.post('/authenticate', (req, res) => {
    let params = req.body;
    account_handler.authenticateLogin(params.mail, params.word).then(result => {
        if(result === "no_auth") {
            res.status(403).json({err: 'Invalid Login Credentials'});
        } else {
            res.json(result)
        }
    })
        .catch(err => {
            res.status(500).json({err: 'unable to login account'});
            console.error(err);
        })
});



module.exports = account_routes;
