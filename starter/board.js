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

    for (let i = 0; i < this.numRows; i++) {
      grid.push([]);
      //console.log(grid);
      for (let j = 0; j < this.numCols; j++) {
        if (shipsArray.includes( (i*this.numCols+j ))) {grid[i].push('s')}
        else {
          grid[i].push(null);
          //console.log(grid);
        }
      }
    }
    return grid;
  }

  randomShips(totalSpaces) {
    let shipLocations = [];
    let countObj = {};
    for (let i = 0; i < this.numShips; i++) {
      shipLocations.push( Math.floor(Math.random() * Math.floor(totalSpaces)) );
    }
    // iterate through ship locations
    // create an object based on the counts of number of ship locations
    // key is string version of number
    // if any of the values is > 1, then call randomShips again

    // console.log(shipLocations)
    shipLocations.forEach( location => {
      // console.log(countObj[location.toString()])
      if (countObj[location.toString()] === undefined) {
        countObj[location.toString()] = 1;
        // console.log(countObj);
      } else {
        countObj[location.toString()]++;
        // console.log('existing key', countObj);
      }
    });
    // console.log(countObj);

    for (let key in countObj) {
      if (countObj[key] > 1) {
      // console.log('duplicate values!', shipLocations);
        shipLocations = this.randomShips(totalSpaces);
      }
    }
    return shipLocations;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    let columns = [];
    for (let i = 0; i < this.numCols; i++) {
      columns.push(i);
    }
    console.table(this.grid, columns);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    let shipsRemaining = this.grid.flat().reduce( (sum, space) => {
      if (space === 's') {
        return sum += 1;
      }
      else {return sum};
    },0);

    return shipsRemaining;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    // compare row to this.numRow & col to this.numCol

    //if (outside the grid) return false
    //if (all the valid cases) return true
    //else false

    const [row, col] = pos;

    if (row > this.numRows || col > this.numCols) {return false}

    if (this.grid[row][col] === null) {return true}
    else if (this.grid[row][col] === 's') {return true}
    else {return false}
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    return this.count() === 0;
  }

  attack(attackArray) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    const [row, col] = attackArray;
    const position = this.grid[row][col];
    if (this.isValidMove(attackArray) && position === null) {
      position = 'x';
    }
    else if (this.isValidMove(attackArray) && position === 's') {
      position = 'h';
    }

  }
}

// const newBoardState = new Board(4, 3, 3);
// console.log(newBoardState.grid)
// console.log(newBoardState.display());
// console.log(newBoardState.isGameOver());
// console.log(newBoardState.grid[5][4] === undefined)
// console.log(newBoardState.randomShips(12));

module.exports = Board;
