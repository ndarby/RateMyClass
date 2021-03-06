const {getAccountByAccountId} = require("../db");

module.exports = {
    getCommentAccountByUserId: function (user_id) {
        return new Promise(function (resolve, reject) {
            getAccountByAccountId(user_id)
                .then(account => {
                    resolve(account);
                })
                .catch(err => reject(err));
        })
    },
};
