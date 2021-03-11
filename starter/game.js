const Board = require('./board');

class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    this.player1 = player1;

    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.board = new Board(numRows, numCols, numShips);
    this.turnCounter = 1;
  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
    this.displayStatus();
    this.player1.getMove(this.processMove.bind(this));
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
    this.board.display();
    console.log(`This is turn #${this.turnCounter}; ships remaining: ${this.board.count()}/${this.numShips}`);
  }

  processMove(moveArray) {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
    // console.log('moveArray',moveArray);
    // console.log('this.board',this.board.display() );
    if (this.board.isValidMove(moveArray)) {
      this.board.attack(moveArray);
      this.turnCounter++;
    } else {
      console.log('Invalid move!');
      this.playTurn();
    }
    if (this.board.isGameOver()) {
      this.displayStatus();
      this.player1.processGameOver(true, this.turnCounter);
    } else {
      this.playTurn();
    }
  }
}

module.exports = BattleshipGame;
