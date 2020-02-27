const express = require('express');

const app = express();

//include the API routes
// see ./routes/index.js
app.use("/api/", require("./routes"));

// Handles any requests that don't match the ones above ie 404
app.get('*', (req, res) => {
    res.status(404);
    res.send("Not found");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
