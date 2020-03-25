class Comments {
    constructor(comment_id, course_id, review_id, user_id, reply_id, comment_body, date_posted) {
        this._comment_id = comment_id;
        this._course_id = course_id;
        this._review_id = review_id;
        this._user_id = user_id;
        this._reply_id = reply_id;
        this._comment_body = comment_body;
        this._date_posted = date_posted;
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

    get reply_id() {
        return this._reply_id;
    }

    set reply_id(value) {
        this._reply_id = value;
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
