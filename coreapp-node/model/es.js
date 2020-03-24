// https://github.com/adrai/node-eventstore
var eventstore = require('eventstore');

var es = eventstore();

es.init(); // callback is optional

//TODO do we need this
es.on('connect', function() {
    console.log('storage connected');
});

es.on('disconnect', function() {
    console.log('connection to storage lost');
});


// //TODO fix/move this: do we need this
// es.defineEventMappings({
//     id: 'id',
//     commitId: 'commitId',
//     commitSequence: 'commitSequence',
//     commitStamp: 'commitStamp',
//     streamRevision: 'streamRevision'
// // });


module.exports = es;
