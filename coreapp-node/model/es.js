// https://github.com/adrai/node-eventstore
const eventstore = require('eventstore');
const amqp = require('amqplib/callback_api');

const url = 'mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ':' + process.env.MONGO_INITDB_ROOT_PASSWORD + '@' + process.env.MONGO_IP + ':' + process.env.MONGO_port+ '/RATE-MY-CLASS?authSource=admin';
const es = require('eventstore')({
    type: 'mongodb',
    url: url,     // optional
    timeout: 10000
});

es.init(function (err) {

});


//TODO do we need this
es.on('connect', function () {
    console.log('storage connected');
});

es.on('disconnect', function () {
    console.log('connection to storage lost');
});


es.useEventPublisher(function (evt) {
    amqp.connect('amqp://' + process.env.RMQ_USER + ':' + process.env.RMQ_PASSWORD + '@' + process.env.RMQ_IP + '/', function (error0, connection) {
        if (error0) {
            throw error0
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1
            }
            const exchange = process.env.RMQ_EXCHANGE;
            const msg = JSON.stringify(evt);

            channel.assertExchange(exchange, 'direct', {
                durable: false
            });
            channel.publish(exchange, evt.context, Buffer.from(msg));
        });
    });

});

// show event context in payload
es.defineEventMappings({
    context: 'context'
});


module.exports = es;

