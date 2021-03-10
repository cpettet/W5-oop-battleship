class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    /*
    - num S's counter

    // Math.floor(Math.random() * Math.floor(max));

    - Math.random() from 0 to total spaces
      [1, 4, 11]
      in for loop: if i === a number in array, add an s
      - add to new array
      - redo Math.random()
      - check if in array of ships
    - entries in array/grid = numRows * numCols
      - randomly populate board,
      - check if new in s array
      - all spots are null = empty
      - check grid if 3 ships or not
    */
    let grid = [];
    const totalSpaces = this.numRows * this.numCols;
    const shipsArray = this.randomShips(totalSpaces);

    for (let i = 0; i < totalSpaces; i++) {
      // if s's in grid < numShips && math.random, add s to grid
      // else, add null
      grid.push(null);
    }
    // Math.floor(Math.random() * Math.floor(max));

    // if numS === numShips, return grid, otherwise call populateGrid again
    return grid;
  }

  randomShips(totalSpaces) {
    const shipLocations = [];
    let countObj = {};
    console.log('numShips',this.numShips);
    for (let i = 0; i < this.numShips; i++) {
      shipLocations.push( Math.floor(Math.random() * Math.floor(totalSpaces)) );
    }
    // iterate through ship locations
    // create an object based on the counts of number of ship locations
    // key is string version of number
    // if any of the values is > 1, then call randomShips again

    shipLocations.forEach( location => {
      if (countObj[location.toString()] === )
    });

    return shipLocations;



  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

const newBoardState = new Board(4, 3, 3);
console.log(newBoardState.grid)
console.log(newBoardState.randomShips(12));

module.exports = Board;
