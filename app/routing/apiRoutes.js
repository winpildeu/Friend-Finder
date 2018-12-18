// import our friends array into this file
let friendsData = require('../data/friends');

// routing ==========================================

module.exports = function(app) {

    // see all of the friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", (req, res) => {
        // confirm input
        console.log(req.body);
    });
};