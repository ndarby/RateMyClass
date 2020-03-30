const uuidv4 = require('uuid/v4');

class Account {
    constructor(first_name, last_name, email, password_hash) {
        this._account_id = uuidv4();
        this._first_name = first_name;
        this._last_name = last_name;
        this._email = email;
        this._password_hash = password_hash;
    }


    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password_hash() {
        return this._password_hash;
    }

    set password_hash(value) {
        this._password_hash = value;
    }

    get account_id() {
        return this._account_id;
    }

}

module.exports = Account;
