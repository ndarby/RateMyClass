const es = require(global.PROJECT+'/model/es')

module.exports.eventSourceInput = {
    createNewAccount: function(accountID) {
        es.getEventStream({
            aggregateId: 'SAMPLE_BANK_EVENTS',
            context: 'ACCOUNT',
            aggregate: accountID
        }, (err, stream) => {
            stream.addEvent({
                action: 'new_account',
                data: {
                    account_id: accountID
                }
            })
            stream.commit()
        //    heyyuo
        })
    },

    addMoneyToAccount: function(accountID, amount) {
        es.getEventStream({
            aggregateId: 'SAMPLE_BANK_EVENTS',
            context: 'ACCOUNT',
            aggregate: accountID
        }, (err, stream) => {
            stream.addEvent({
                action: 'transfer',
                data: {
                    amount: amount
                }
            })
            stream.commit()
        })
    }
}

module.exports.eventSourceOutput = {
    getEventStream: function(accountID) {
        let json = {};
        es.getEvents({
            aggregateId: 'SAMPLE_BANK_EVENTS',
            context: 'ACCOUNT',
            aggregate: accountID
        }, function(err, events) {
            json = events;
        })
        return json;
    },

    getEventView: function(events) {
        const Account = require(global.PROJECT+'/model/demo_money/account_class');
        let account = null
        for(let event of events) {
            switch(event.payload.action) {
                case "new_account":
                    account = new Account(event.payload.data.account_id)
                    break;
                case "transfer":
                    if(account === null) {
                        throw("ACCOUNT DOES NOT EXIST")
                    }
                    account.addMoney(event.payload.data.amount)
                    break;
                default:
                    throw("ACTION NOT IMPLEMENTED!!!! FIX THIS")
            }
        }
        return account
    }
}
