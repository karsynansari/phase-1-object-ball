function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function someFunction() {
  const object = gameObject();
  console.log(object);
  return object["home"];
}

function findPlayer(playersName) {
  const object = gameObject();
  const isInHomeTeam = object.home.players[playersName];
  if (isInHomeTeam) {
    return isInHomeTeam;
  } else {
    return object.away.players[playersName];
  }
}

function numPointsScored(playersName) {
  const foundPlayer = findPlayer(playersName);
  return foundPlayer.points;
}
// console.log(numPointsScored("Brendan Haywood"));

function shoeSize(playersName) {
  const shoes = findPlayer(playersName);
  return shoes.shoe;

  // const object = gameObject();

  // const isInHomeTeam = object.home.players[playersName];
  // if (isInHomeTeam) {
  //   return isInHomeTeam.shoe;
  // } else {
  //   return object.away.players[playersName].shoe;
  // }
}
console.log(shoeSize("Brendan Haywood"));

shoeSize("Jason Terry");

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.

function teamColors(teamName) {
  const object = gameObject();
  if (object.home.teamName === teamName) {
    return object.home.colors;
  } else {
    return object.away.colors;
  }
}
console.log(teamColors("Brooklyn Nets"));

// Build a function, teamNames, that operates on the game object to return an array of the team names.

const teamNames = () => {
  const object = gameObject();
  const teamNamesArray = [];
  console.log(object);
  for (const property in object) {
    teamNamesArray.push(object[property].teamName);
    return teamNamesArray;
  }
};
console.log(teamNames());
// issues on this function
// function numPointsScored(playerName) {
//   console.log(gameObject().home.players["Alan Anderson"])
//   for (gameKey in gameObject()) {
//     if (Object.keys(gameObject().gameKey.players)) {
//       return gameObject().gameKey.players[playerName].points
//     }
//   }
// }

// const player1 = "Brendan Haywood";
// console.log(numPointsScored(player1));

// function teamColors(team) {
//   if (gameObject().home.teamName === team) {
//     return gameObject().home.colors;
//   } else {
//     return gameObject().away.colors;
//   }
// }

// console.log(teamColors("Charlotte Hornets"));
