'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = '○';
    } else {
      this.symbol = '●';
    }
  }
}

class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  createCheckers() {
    let whitePosition = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]]; 
    let blackPosition = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];
    for (let i=0;i<12;i++){
      // whitePosition[i].push(this.grid);
      // whitePosition[i].push(this.checkers);
      let whiteChecker = new Checker('white');
      let whiteRow = whitePosition[i][0];
      let whiteCol = whitePosition[i][1];

      blackPosition[i].push(this.grid);
      // blackPosition[i].push(this.checkers);
      let blackChecker = new Checker ('black');
      let blackRow = blackPosition[i][0];
      let blackCol = blackPosition[i][1];

      this.grid[whiteRow][whiteCol] = whiteChecker;
      this.grid[blackRow][blackCol] = blackChecker;
      this.checkers.push(whiteChecker, blackChecker);
    }
  }
  selectChecker(row, col) {
    // this.board.grid = [start][end];
    return this.grid[row][col];
  }
  killChecker(position){
    // this.selectChecker = (position[0], position[1]);
    let checker = this.selectChecker(position[0], position[1])
    let indexChecker = this.checkers.indexOf(checker)
    this.checkers.splice(indexChecker, 1);

    this.grid[position[0]][position[1]] = null;
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  moveChecker(start, end) {
    const startRow= start.charAt(0);
    const startCol = start.charAt(1);
    const endRow = end.charAt(0);
    const endCol = end.charAt(1);
    console.log('start: ' + start);
    console.log('end: ' + end);
    const checker = this.board.selectChecker(start[0], start[1]);
    this.board.grid[endRow][endCol] = checker;
    // this.board.grid[endRow][endCol] = this.board.grid[startRow][startCol]
    this.board.grid[startRow][startCol] = null;
    if (Math.sqrt((endRow-startRow)^2 + (endCol-startCol)^2) >= 2){
      // const position = [((startRow + endRow)/2),((startCol+endCol)/2)];
      this.board.killChecker[(startRow + endRow)/2,(startCol+endCol)/2];
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
