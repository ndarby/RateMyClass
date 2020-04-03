const es = require(global.PROJECT + '/model/es');

module.exports.attributeProjectionStream = {
    // gets the events, for debugging
    getAttributeEventStream: function (attribute_id) {
        let json = {};
        es.getEvents({
            aggregateId: 'RATEMYCLASS',
            context: 'ATTRIBUTE',
            aggregate: attribute_id
        }, function (err, events) {
            json = events;
        });
        return json;
    },


};
