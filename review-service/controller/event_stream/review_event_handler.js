const review_handler = require('../../model/review_handler');
/**
 *  This is the base place to handle requesting events. This method is called on each new event received
 */
module.exports.handleOnEvent = function (event_data) {
    let data = event_data.content.toString();
    let json_data = JSON.parse(data);

    // json_data contains data sent - replace next line with code - should interact with projection_processing
    console.log("Received data: " + JSON.stringify(json_data));

    const action = json_data.action;
    switch (action) {
        case 'new_review':
            review_handler.generateNewReview(json_data.data);
            break;
        case 'edit_review_body':
            review_handler.updateReviewBody(json_data.data);
            break;
        case 'edit_review_title':
            review_handler.updateReviewTitle(json_data.data);
            break;
        case 'edit_prof_name':
            review_handler.updateProfName(json_data.data);
            break;
        case 'edit_rating':
            review_handler.updateRating(json_data.data);
            break;
        case 'edit_tags':
            review_handler.updateTags(json_data.data);
            break;
        case 'delete_review':
            review_handler.deleteReview(json_data.data);
            break;
    }
};
