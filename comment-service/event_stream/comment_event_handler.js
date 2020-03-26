const comment_handler = require('../model/comment_handler');
/**
 *  This is the base place to handle requesting events. This method is called on each new event received
 */
module.exports.handleOnEvent = function (event_data) {
    let data = event_data.content.toString();
    let json_data = JSON.parse(data);

    // json_data contains data sent - replace next line with code - should interact with projection_processing
    console.log("Received data: " + JSON.stringify(json_data))

    const action = json_data.action;
    switch (action) {
        case 'new_comment':
            comment_handler.generateNewComment(json_data.data);
            break;
        case 'edit_comment_body':
            comment_handler.updateCommentBody(json_data.data);
            break;
        case 'delete_comment':
            comment_handler.deleteComment(json_data.data);
            break;
    }
};
