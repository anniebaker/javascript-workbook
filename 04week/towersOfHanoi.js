**
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Take the last element of the starting array and append it to the last of the ending array
function movePiece(startStack, endStack) {
    stacks[endStack].push(stacks[startStack].pop());
}


// Compare the size of the last element of the starting and ending array
function isLegal(startStack, endStack) {
// Allow a move if the array is empty as a special condition
  if (stacks[endStack].slice(-1)==""){
    return true;
// Allow a move if the number of the ending array is smaller than the size of the starting array
  } else if (stacks[endStack].slice(-1) > stacks[startStack].slice(-1)) {
    return true;
  } else {
    return false;
  }
};

// Check to see if the b or c array has the winning arrangement. Array a does not count towards a win.
//loop thru object array
let winStack = [4, 3, 2, 1];
let gameOver = false;
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function checkForWin() {
  if (arraysEqual(stacks.b, winStack) || arraysEqual(stacks.c, winStack)) {
    console.log("you're a winner!");
    gameOver = true;
    return true;
  } else {
    return false;
  }
}


function towersOfHanoi(startStack, endStack) {
    checkForWin();
    if (!gameOver) {
        if (isLegal(startStack, endStack) == true) {
            movePiece(startStack, endStack);
        }
    } else {
        console.log("You win!");
    }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests
if (typeof describe === 'function') {
  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win in stack b', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
    it('should detect a win in stack c', () => {
        stacks = { a: [], b: [], c: [4, 3, 2, 1] };
        assert.equal(checkForWin(), true);
        stacks = { a: [1], b: [4, 3, 2], c: [] };
        assert.equal(checkForWin(), false);
      });
      it('should not detect a win in stack a', () => {
        stacks = { a: [4, 3, 2, 1], b: [], c: [] };
        assert.equal(checkForWin(), false);
        stacks = { a: [], b: [4, 3, 2, 1], c: [] };
        assert.equal(checkForWin(), true);
      });
    it('should end game once won, ()', () => {
        stacks = { a: [], b: [4, 3, 2, 1], c: [] };
        assert.equal(gameOver, true);
      });
  });
} else {
  getPrompt();
}
