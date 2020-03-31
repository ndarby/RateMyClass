const uuidv4 = require('uuid/v4');
const Account = require('./account_class');
const db = require('../db');

module.exports = {
    addNewAccount: function(first_name, last_name, email, password_hash) {
        return new Promise(function (resolve, reject) {
            let account = new Account(first_name, last_name, email, password_hash);
            db.addNewAccount(account).then(() => {resolve();}).catch(err => {reject(err);});
        });
    },

    editAccount: function(account_id, data) {
        return new Promise(function (resolve, reject) {
            db.updateAccount(account_id, data).then(() => {resolve();}).catch(err => {reject(err);});
        });
    },

    authenticateLogin: function (email, password_hash) {
        return new Promise(function (resolve, reject) {
            db.getAccount(email, password_hash).then((result) => {
                if(result === null) {
                    resolve("no_auth");
                } else {
                    resolve(result);
                }
            }).catch(err => {reject(err);});
        });
    }
};
