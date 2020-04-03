class Review {

    constructor(review_id, course_id, user_id, account_credentials, prof_name, review_title, review_body, rating, tags, date_posted, ) {
        this._review_id = review_id;
        this._course_id = course_id;
        this._account_credentials = account_credentials;
        this._user_id = user_id;
        this._prof_name = prof_name;
        this._rating = rating;
        this._review_title = review_title;
        this._review_body = review_body;
        this._tags = tags;
        this._date_posted = date_posted;
    }

    get account_credentials() {
        return this._account_credentials;
    }

    set account_credentials(value) {
        this._account_credentials = value;
    }

    get review_id() {
        return this._review_id;
    }

    get course_id() {
        return this._course_id;
    }

    get user_id() {
        return this._user_id;
    }

    get prof_name() {
        return this._prof_name;
    }

    get review_body() {
        return this._review_body;
    }

    set review_body(value) {
        this._review_body = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get date_posted() {
        return this._date_posted;
    }

    get review_title() {
        return this._review_title;
    }

    set review_title(value) {
        this._review_title = value;
    }

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }
}

module.exports = Review;
