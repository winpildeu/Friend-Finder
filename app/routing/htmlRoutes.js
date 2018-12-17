const path = require('path');

// routes to handle when the user "visits" a page

module.exports = function (app) {

    // handles the homepage
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // takes the users to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // catch-all if no matching route is found => goes to the homepage
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};