function gameObject() {
  const nbaTeams = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ['Black', 'White'],
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
      colors: ['Turquoise', 'Purple'],
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
  return nbaTeams;
}
// issues on this function
// function numPointsScored(playerName) {
//   console.log(gameObject().home.players["Alan Anderson"])
//   for (gameKey in gameObject()) {
//     if (Object.keys(gameObject().gameKey.players)) {
//       return gameObject().gameKey.players[playerName].points
//     }
//   }
// }
function findPlayer(playerName) {
  if (gameObject().home.players[playerName]) {
    return gameObject().home.players[playerName]
  } else {
    return gameObject().away.players[playerName]
  }
}

function numPointsScored(playerName) {
  const playerObj = findPlayer(playerName)
  return playerObj.points
}

function teamColors(team) {
  if (gameObject().home.teamName === team) {
    return gameObject().home.colors
  } else {
    return gameObject().away.colors
  }
}

function teamNames() {
  return [gameObject().home.teamName, gameObject().away.teamName]
}

// console.log(teamNames())

// function playerNumbers(team) {
//   if (gameObject().home.teamName === team) {
//     const arrPlayerNumbers = []
//     for (const player in gameObject().home.players) {
//       arrPlayerNumbers.push(player.number)
//     }
//   }
// }

// console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName) {
  return findPlayer(playerName)
}

function bigShoeRebounds() {
  let biggestShoeSize = 0
  let playerWithBiggestShoe = {}
  for (const player in gameObject().home.players) {
    if (player.shoe > biggestShoeSize) {
      biggestShoeSize = player.shoe
      playerWithBiggestShoe = player
    }
  }
  for (const player in gameObject().away.players) {
    if (player.shoe > biggestShoeSize) {
      biggestShoeSize = player.shoe
      playerWithBiggestShoe = player
    }
  }
  return player.rebounds
}

console.log(bigShoeRebounds())