/**
 * This is a basic demo file has one rooute a get request used by the React Demo
 */
const express = require('express');
const demo_routes = express.Router();

// An api endpoint that returns a short list of items
// Responds to /api/demo/getList
demo_routes.get('/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});




demo_routes.get('/add', (req, res) => {
    let account_es = require(global.PROJECT+'/model/demo_money/handler');
    account_es.eventSourceInput.addMoneyToAccount(1, 10)
    account_es.eventSourceInput.addMoneyToAccount(2, 15)
    var list = ["addded moneys"];
    res.json(list);
});

demo_routes.get('/new', (req, res) => {
    let account_es = require(global.PROJECT+'/model/demo_money/handler');
    account_es.eventSourceInput.createNewAccount(1 )
    account_es.eventSourceInput.createNewAccount(2 )
    var list = ["addded account"];
    res.json(list);
});

demo_routes.get('/get', (req, res) => {
    let account_es = require(global.PROJECT+ '/model/demo_money/handler');
    let json = account_es.eventSourceOutput.getEventStream(1)
    let final_account = account_es.eventSourceOutput.getEventView(json)
    res.json(final_account)
});

demo_routes.get('/emit', (req, res) => {
    var amqp = require('amqplib/callback_api');

    amqp.connect('amqp://'+process.env.RMQ_USER+':'+process.env.RMQ_PASSWORD+'@'+process.env.RMQ_IP+'/', function(error0, connection) {
        if (error0) {
            throw error0
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1
            }
            const exchange = process.env.RMQ_EXCHANGE
            const msg = JSON.stringify({data: 'Hello Comment!'})
            const msg2 = JSON.stringify({data: 'Hello Review!'})

            channel.assertExchange(exchange, 'direct', {
                durable: false
            });
            channel.publish(exchange, process.env.RMQ_EVENT_COMMENT, Buffer.from(msg))
            channel.publish(exchange, process.env.RMQ_EVENT_REVIEW, Buffer.from(msg2))
        });
    });
    res.json('SENT')
});



module.exports = demo_routes;
