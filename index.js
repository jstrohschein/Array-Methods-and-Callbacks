let fifaData = require('./fifa.js'); //Changed this to a require to use the VSCode output console


// console.log(array);

// console.log('its working');


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */




//a,b,c,d,e
// const practiceFilter = fifaData.filter((game) => {
//     if (game.Year === 2014 && game.MatchID === 300186501){

//         console.log("Home Team: " + game["Home Team Name"]);

//         console.log("Away Team: " + game["Away Team Name"]);

//         console.log("Home Team Goals: " + game["Home Team Goals"]);

//         console.log("Away Team Goals: " + game["Away Team Goals"]);

//         console.log("Win Conditions: " + game["Win conditions"]);
//     }
// });

// console.log(practiceFilter);





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */





function getFinals(data) {

    const finalsData = data.filter((game) => {
        if (game.Stage === "Final"){

            return game;
        }
        
    });

    return finalsData;

};

// console.log(getFinals(fifaData));





/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */





function getYears(cb) {

    let array = cb;
    
    const years = array.map(game => game.Year);

    return years;

};


// console.log(getYears(getFinals(fifaData)));





/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 






function getWinners(cb) {

    let array = cb;

    const winners = array.map(game => {

        if (game["Home Team Goals"] > game["Away Team Goals"]){
            return game["Home Team Name"];
        } 
        
        else {
            return game["Away Team Name"];
        };
    });

    return winners;

};

// console.log(getWinners(getFinals(fifaData)));






/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */






function getWinnersByYear(cbWin, cbYear) {

    let num = cbWin.length;

    for (let i = 0; i < num; i++){
        console.log('In ' + cbYear[i] + ', ' + cbWin[i] + ' won the world cup!');
    }
};

// console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));






/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */






function getAverageGoals(data) {

    const averageHomeGoals = data.reduce((total, game) => {
        
        return total += (game["Home Team Goals"]);

    }, 0);

    const averageAwayGoals = data.reduce((total, game) => {
        
        return total += (game["Away Team Goals"]);

    }, 0);

    return `Average Home Goals: ${Math.round(averageHomeGoals / data.length)}

Average Away Goals: ${Math.round(averageAwayGoals / data.length)}`;

};

// console.log(getAverageGoals(fifaData));






/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {

    const countryWins = data.reduce((total, game) => {

        if (game["Home Team Initials"] === teamInitials && game["Home Team Goals"] > game["Away Team Goals"] && game.Stage === 'Final'){
            return total += 1;
        }

        else if (game["Away Team Initials"] === teamInitials && game["Away Team Goals"] > game["Home Team Goals"] && game.stage === 'Final'){
            return total += 1;
        }

        else {
            return total;
        }

    }, 0);
    
    if (countryWins === 1){
        return `${teamInitials} has won ${countryWins} world cup`;
    }

    else {
        return `${teamInitials} has won ${countryWins} world cups`;
    }
};

// console.log(getCountryWins(fifaData, 'GER'));







/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

// getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

// badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
