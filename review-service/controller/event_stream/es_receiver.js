/**
 * This module subscribes to rabbitMQ pub/sub
 *  Only configure the subscription in whenConnected method
 *
 *  source : https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html
 */
const amqp = require('amqplib/callback_api');

let amqpConn = null;
module.exports.start = function start(onEvent) {
    amqp.connect('amqp://'+process.env.RMQ_USER+':'+process.env.RMQ_PASSWORD+'@'+process.env.RMQ_IP+'/', function(err, conn) {
        if (err) {
            console.error("[AMQP]", err.message);
            return setTimeout(start, 1000)
        }
        conn.on("error", function(err) {
            if (err.message !== "Connection closing") {
                console.error("[AMQP] conn error", err.message)
            }
        });
        conn.on("close", function() {
            console.error("[AMQP] reconnecting");
            return setTimeout(start, 1000)
        });

        console.log("[AMQP] connected");
        amqpConn = conn;

        whenConnected(onEvent)
    })
};

function whenConnected(onEvent) {
    amqpConn.createChannel(function(error1, channel) {
        if (error1) {
            throw error1
        }
        const exchange = process.env.RMQ_EXCHANGE;

        channel.assertExchange(exchange, 'direct', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, function(error2, q) {
            if (error2) {
                throw error2
            }
            // CHANGE THIS TO CHANGE PUB SUB SUBSCRIPTION
            channel.bindQueue(q.queue, exchange, process.env.RMQ_EVENT_REVIEW);

            channel.consume(q.queue, onEvent, {
                noAck: true
            })
        })
    })
}

