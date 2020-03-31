global.PROJECT = '/home/node/app';
const express = require('express');
const es_receiver = require(global.PROJECT + '/event_stream/es_receiver');
const app = express();
const port = 8081;

setTimeout(() => {
    es_receiver.start(require(global.PROJECT + '/event_stream/attribute_event_handler').handleOnEvent)
}, 5000);

//include the API routes
// see ./routes/index.js
app.use("/api/", require("./routes"));

// Handles any requests that don't match the ones above ie 404
app.get('*', (req, res) => {
    res.status(404);
    res.send("Not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
