const createBoard = (n) => {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(Array(n).fill(" * "));
  }
  return board;
};
const ticTacToe = () => {
  let board = createBoard(5);
  let bool = true;
  let symbol = "";
  const randomNum = () => {
    let range = board.length;
    return Math.floor(Math.random() * range);
  };
  const movePlayer = () => {
    let firstCoordinate = randomNum();
    let secondCoordinate = randomNum();
    return [firstCoordinate, secondCoordinate];
  };
  while (!filt(board)) {
    let [i, j] = movePlayer();
    if (board[i][j] === " * ") {
      if (bool) {
        board[i][j] = "X";
        bool = !bool;
        symbol = "X";
      } else {
        board[i][j] = "O";
        bool = !bool;
        symbol = "O";
      }
      let result = checkWinner(board, symbol);
      if (result) {
        return result;
      }
      if (!result && filt(board)) {
        return "no one win";
      }
    }
  }
};
const filt = (arr) => {
  if (arr.every((item) => item.every((ni) => ni !== " * "))) {
    return true;
  }
  return false;
};
const checkWinner = (board, sym) => {
  console.log(board, sym);
  const arrOfDiagonal1 = [];
  const arrOfDiagonal2 = [];
  let result = undefined;
  for (let i = 0; i < board.length; i++) {
    if (board[i].every((el) => el === sym)) {
      result = `winner is ${sym}`;
      return result;
    } else if (board.every((el) => el[i] === sym)) {
      result = `winner is ${sym}`;
      return result;
    }
    arrOfDiagonal1.push(board[i][i]);
    arrOfDiagonal2.push(board[i][board.length - 1 - i]);
  }
  if (
    arrOfDiagonal1.every((el) => el === sym) ||
    arrOfDiagonal2.every((el) => el === sym)
  ) {
    result = `winner is ${sym}`;
    return result;
  }
  return result;
};
ticTacToe();
