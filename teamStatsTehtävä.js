const team = {
    //alla on pelaajia
    _players: [ {
      firstName: 'Jussi', lastName: 'Jokunen', age: 23,
    },
    {
      firstName: 'Aapo', lastName: 'Kananen', age: 30,
    },
    {
      firstName: 'Joel', lastName: 'Naama', age:29,
    },
  
    ],
    //pelit
    _games: [{
      opponent: 'Karpat', teamPoints: 7, opponentPoints: 3,
    },
    {
      opponent: 'hifk', teamPoints: 2, opponentPoints: 2,
    },
    {
      opponent: 'jukurit', teamPoints: 9, opponentPoints: 2,
    }
    ],
    //saadaan pelaaja
    get players() {
      return this._players;
    },
  //saadaan peli 
    get games() {
      return this._games;
    },
    
    
  //halutaan lisätä uus pelaaja nii tällä koodilla saadaan.
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    //lisää pelaajan
    this.players.push(player); 
  },
  //lisätään sitten uusi peli tällä koodilla.
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoint: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game)
  },
  
  }
  
  team.addPlayer('Stephen', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('bugs', 'bunny', 76)
  
  team.addGame('LMN',2 , 5)
  team.addGame('liki',1 ,12)
  team.addGame('ols',2 ,2)
  
  console.log(team.players)
  console.log(team.games)