class Account {
    constructor(account_id) {
        this.id = account_id;
        this._amount = 0
    }
    set amount(amount) {
        this._amount = amount
    }
    get amount() {
        return this._amount
    }
    addMoney(amount) {
       this._amount += amount
    }
}
module.exports = Account;
