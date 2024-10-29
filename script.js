const initialGrid = {
  1: {
    value: "",
    winCombinations: [
      [2, 3],
      [4, 7],
      [5, 9],
    ],
  },
  2: {
    value: "",
    winCombinations: [
      [1, 3],
      [5, 8],
    ],
  },
  3: {
    value: "",
    winCombinations: [[1, 2], [6.9], [5, 7]],
  },
  4: {
    value: "",
    winCombinations: [
      [5, 6],
      [1, 7],
    ],
  },
  5: {
    value: "",
    winCombinations: [
      [4, 6],
      [2, 8],
      [1, 9],
      [3, 7],
    ],
  },
  6: {
    value: "",
    winCombinations: [
      [4, 5],
      [3, 9],
    ],
  },
  7: {
    value: "",
    winCombinations: [
      [1, 4],
      [8, 9],
      [3, 5],
    ],
  },
  8: {
    value: "",
    winCombinations: [
      [7, 9],
      [2, 5],
    ],
  },
  9: {
    value: "",
    winCombinations: [
      [7, 8],
      [3, 6],
      [1, 5],
    ],
  },
};

let currentGrid = { ...initialGrid };

let cellsHtml = "";

for (key in currentGrid) {
  cellsHtml += `<div class="cell" id="cell${key}" onclick="updateAndChangeTurn(${key})"></div>`;
}

document.getElementById("layout").innerHTML = cellsHtml;

let player1 = true;
let win = false;
let count = 1;

function reset() {
  player1 = true;
  win = false;
  count = 1;
  currentGrid = { ...initialGrid };

  for (const key in currentGrid) {
    document.getElementById(`cell${key}`).innerHTML = "";
  }

  document.getElementById(`playerTurn`).innerHTML = "Player1 Turn";
}

function checkWin(cell, val) {
  const winCombinations = currentGrid[cell].winCombinations;

  for (const cells of winCombinations) {
    const winCombinationMatches = cells.every(
      (cell) => currentGrid[cell].value === val
    );
    if (winCombinationMatches) return true;
  }
}

function islandChecker(a, b, c) {
  if (b < 0 || b > a.length || c < 0 || c > a[b].length || a[b][c] === 1) {
    return;
  }
  a[b][c] === 0;
  islandChecker(a, b - 1, c);
  islandChecker(a, b + 1, c);
  islandChecker(a, b, c - 1);
  islandChecker(a, b, c + 1);
}

function foo(x) {
  let count = 0;
  for (const i in x) {
    if (j in x[i]) {
      if (x[i][j] === 1) {
        count++;
        islandChecker(x, i, j);
      }
    }
  }
  return count;
}

function updateAndChangeTurn(num) {
  if (currentGrid[num].value === "" && !win) {
    if (player1) {
      currentGrid[num].value = "o";
    } else {
      currentGrid[num].value = "x";
    }

    document.getElementById(`cell${num}`).innerHTML = currentGrid[num].value;

    win = checkWin(num, currentGrid[num].value);

    if (!win) {
      player1 = !player1;
    }

    if (!win && count === 9) {
      document.getElementById(`playerTurn`).innerHTML = "Draw";
    } else {
      document.getElementById(`playerTurn`).innerHTML = `${
        player1 ? "Player1" : "Player2"
      } ${win ? "Won" : "Turn"}`;
    }

    count++;
  }
}
