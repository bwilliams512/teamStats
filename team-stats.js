/*
In this project, we create and extract information about a sports team.
We create data using the JavaScript data structures at our disposal: arrays, objects, etc.
Once created, we manipulate these data structures as well as gain insights from them.
*/

// We want a data structure to store the information about the team
const team = {
  _players: [
    { firstName: 'Joe', lastName: 'Burrow', position: 'QB' },
    { firstName: 'Clyde', lastName: 'Edwards-Helaire', position: 'RB' },
    { firstName: 'Ja Marr', lastName: 'Chase', position: 'WR' }
  ],
  _games: [
    { opponent: 'Georgia Southern', teamPoints: 55, opponentPoints: 3 },
    { opponent: '@ Texas', teamPoints: 45, opponentPoints: 38 },
    { opponent: 'Northwestern State', teamPoints: 65, opponentPoints: 14 }
  ],

  // Create getter methods
  get players () {
    return this._players
  },
  get games () {
    return this._games
  },

  // Add method to add a new player
  addPlayer (firstName, lastName, position) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      postion: position
    }

    this.players.push(player)
  },

  // Add method to add games
  addGame (opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game)
  }
}

// Invoke addPlayer method to add players
team.addPlayer('Justin', 'Jefferson', 'WR')
team.addPlayer('Terrace', 'Marshall', 'WR')
team.addPlayer('Thaddeus', 'Moss', 'TE')

// Uncomment code below to make sure players were added
// console.log(team.players);

// Invoke addGame method to add games
team.addGame('@ Vanderbilt', 66, 38)
team.addGame('Utah State', 42, 6)
team.addGame('Florida', 42, 28)

// Print updated arrays
console.log(team.players)
console.log(team.games)
