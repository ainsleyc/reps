
var assert = require('assert');

function TicTacToeGame() {
  this.board = [
    new Array(3),
    new Array(3),
    new Array(3)
  ]
}

TicTacToeGame.prototype.checkWinHorizontal = function(row) {
  var currChar = null;
  for(var i = 0; i <= 2; i++) {
    if(currChar === null) {
      currChar = this.board[row][i];
    } else {
      if(this.board[row][i] !== currChar) {
        return null;
      }
    }
  }
  return currChar;
}

TicTacToeGame.prototype.checkWinVertical = function(column) {
  var currChar = null;
  for(var i = 0; i <= 2; i++) {
    if(currChar === null) {
      currChar = this.board[i][column];
    } else {
      if(this.board[i][column] !== currChar) {
        return null;
      }
    }
  }
  return currChar;
}

TicTacToeGame.prototype.checkWinDownDiagonal = function() {
  var currChar = null;
  for(var i = 0; i <= 2; i++) {
    if(currChar === null) {
      currChar = this.board[i][i];
    } else {
      if(this.board[i][i] !== currChar) {
        return null;
      }
    }
  }
  return currChar;
}

TicTacToeGame.prototype.checkWinUpDiagonal = function() {
  var currChar = null;
  for(var i = 0; i <= 2; i++) {
    if(currChar === null) {
      currChar = this.board[i][2-i];
    } else {
      if(this.board[i][2-i] !== currChar) {
        return null;
      }
    }
  }
  return currChar;
}

TicTacToeGame.prototype.checkForWin = function() {
  for(var i = 0; i <= 2; i++) {
    if(this.checkWinHorizontal(i) !== null) {
      return true;
    }
    if(this.checkWinVertical(i) !== null) {
      return true;
    }
  }
  if(this.checkWinDownDiagonal() !== null) {
    return true;
  }
  if(this.checkWinUpDiagonal() !== null) {
    return true;
  }
}

var game = new TicTacToeGame();
game.board[0][0] = 'x';
game.board[0][1] = 'x';
game.board[0][2] = 'x';
game.board[1][0] = 'o';
game.board[1][1] = 'x';
game.board[1][2] = 'o';
game.board[2][0] = 'o';
game.board[2][1] = 'o';
game.board[2][2] = 'x';

assert.equal(game.checkWinHorizontal(0), 'x');
assert.equal(game.checkWinHorizontal(1), null);
assert.equal(game.checkWinHorizontal(2), null);

assert.equal(game.checkWinVertical(0), null);
assert.equal(game.checkWinVertical(1), null);
assert.equal(game.checkWinVertical(2), null);

assert.equal(game.checkWinDownDiagonal(), 'x');
assert.equal(game.checkWinUpDiagonal(), null);

assert.equal(game.checkForWin(), true);
