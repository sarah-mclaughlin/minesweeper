document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
                cells: [
                      {row: 0, col: 0, isMine: true, hidden: true}, 
                      {row: 0, col: 1, isMine: false, hidden: true}, 
                      {row: 0, col: 2, isMine: true, hidden: true}, 
                      {row: 1, col: 0, isMine: false, hidden: true},
                      {row: 1, col: 1, isMine: true, hidden: true},
                      {row: 1, col: 2, isMine: false, hidden: true},
                      {row: 2, col: 0, isMine: true, hidden: true},
                      {row: 2, col: 1, isMine: false, hidden: true},
                      {row: 2, col: 2, isMine: true, hidden: true}
                      ]
            }

function startGame () {
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i];
    cell.surroundingMines = countSurroundingMines(cell);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    var check = board.cells[i];
    if (check.isMine == true && check.isMarked == false) {
      return
    } else if (check.isMine == false && check.isHidden == true) {
      return
    }
  }
  lib.displayMessage('You win!');  
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  for (var i = 0; i < board.cells.length; i++) {    
    var count; 
    if (cell.isMine[i] == true) {
        return count++;
      } 
    return(count);
  }
}

