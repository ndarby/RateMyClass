/**
 * Handler for pub/sub receiving
 * Incoming messages are processed/directed here
 */
const attribute_handler = require('../../model/attribute_handler');

/**
 *  This is the base place to handle requesting events. This method is called on each new event received
 */
module.exports.handleOnEvent = function (event_data) {
    let data = event_data.content.toString();
    let json_data = JSON.parse(data);

    // json_data contains data sent - replace next line with code - should interact with projection_processing
    console.log("Received data: " + JSON.stringify(json_data));

    // Switch the event actions to handle
    const action = json_data.action;
    switch (action) {
        case 'new_review':
            attribute_handler.updateRating(json_data.data);
            break;
        default:
            console.log("ignored");
    }
};
