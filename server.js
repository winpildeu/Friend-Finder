// import modules
const express = require('express');
const path = require('path');

// setup express
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import the routes
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// start up the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});