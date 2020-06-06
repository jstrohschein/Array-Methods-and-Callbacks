let fifaData = require('./fifa.js');


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

console.log(getCountryWins(fifaData, 'GER'));