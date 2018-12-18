// import our friends array into this file
let friendsData = require('../data/friends');

// functions ========================================

function calcScore(person) {
    let scoreArray = person.scores.map(index => {
        return parseInt(index);
    });

    let totalScore = scoreArray.reduce((total, num) => {
        return total + num;
    });

    return totalScore;
}

// routing ==========================================

module.exports = function(app) {

    // see all of the friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", (req, res) => {
        // save the input
        let user = req.body;

        // calculate the user's score
        let userScore = calcScore(user);
        console.log(`User's score: ${userScore}`);       

        // make an array of scores for all of the friends
        let friendsScoreArray = [];
        friendsData.forEach(index => {
            friendsScoreArray.push(calcScore(index));
        });

        // make an array of score differences compared with the user
        let comparisonArray = friendsScoreArray.map(index => {
            return Math.abs(userScore - index);
        });
        console.log(`Comparison Array: ${comparisonArray}`);

        // find the lowest number (closest match) and save the index of it
        let minNum = 100;
        comparisonArray.forEach(index => {
            (index < minNum) ? minNum = index : null
        });
        let match = comparisonArray.indexOf(minNum);
        console.log(`minNum: ${minNum}`);      
        console.log(`Your match is index: ${match}`);
        
        // add the user's info to the DB
        friendsData.push(user);
        
        // send the profile of the closest match
        res.send(friendsData[match]);
    });
};