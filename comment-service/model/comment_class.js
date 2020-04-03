/**
 * Model definition for Comments
 */
class Comments {
    constructor(comment_id, review_id, user_id, account_credentials, parent_id, comment_body, date_posted) {
        this._comment_id = comment_id;
        this._review_id = review_id;
        this._user_id = user_id;
        this._parent_id = parent_id;
        this._comment_body = comment_body;
        this._date_posted = date_posted;
        this._account_credentials = account_credentials;
    }

    get account_credentials() {
        return this._account_credentials;
    }

    set account_credentials(value) {
        this._account_credentials = value;
    }

    get comment_id() {
        return this._comment_id;
    }

    set comment_id(value) {
        this._comment_id = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get parent_id() {
        return this._parent_id;
    }

    set parent_id(value) {
        this._parent_id = value;
    }

    get comment_body() {
        return this._comment_body;
    }

    set comment_body(value) {
        this._comment_body = value;
    }

    get date_posted() {
        return this._date_posted;
    }

    get course_id() {
        return this._course_id;
    }

    get review_id() {
        return this._review_id;
    }
}

module.exports = Comments;
