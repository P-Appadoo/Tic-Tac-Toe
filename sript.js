const obj = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

let objCopy = { ...obj };

let player1 = true;
let win = false;
let count = 1;

function reset() {
  player1 = true;
  win = false;
  count = 1;
  objCopy = { ...obj };

  for (const key in objCopy) {
    document.getElementById(`cell${key}`).innerHTML = "";
  }

  document.getElementById(`playerTurn`).innerHTML = "Player1 Turn";
}

function checkWin() {
  if (
    objCopy[1] !== "" &&
    objCopy[1] === objCopy[2] &&
    objCopy[2] === objCopy[3]
  ) {
    return true;
  }
  if (
    objCopy[1] !== "" &&
    objCopy[1] === objCopy[4] &&
    objCopy[4] === objCopy[7]
  ) {
    return true;
  }
  if (
    objCopy[4] !== "" &&
    objCopy[4] === objCopy[5] &&
    objCopy[5] === objCopy[6]
  ) {
    return true;
  }
  if (
    objCopy[7] !== "" &&
    objCopy[7] === objCopy[8] &&
    objCopy[8] === objCopy[9]
  ) {
    return true;
  }
  if (
    objCopy[2] !== "" &&
    objCopy[2] === objCopy[5] &&
    objCopy[5] === objCopy[8]
  ) {
    return true;
  }
  if (
    objCopy[3] !== "" &&
    objCopy[3] === objCopy[6] &&
    objCopy[6] === objCopy[9]
  ) {
    return true;
  }
  if (
    objCopy[1] !== "" &&
    objCopy[1] === objCopy[5] &&
    objCopy[5] === objCopy[9]
  ) {
    return true;
  }
  if (
    objCopy[3] !== "" &&
    objCopy[3] === objCopy[5] &&
    objCopy[5] === objCopy[7]
  ) {
    return true;
  }
}

function updateAndChangeTurn(num) {
  if (objCopy[num] === "" && !win) {
    if (player1) {
      objCopy[num] = "o";
    } else {
      objCopy[num] = "x";
    }

    document.getElementById(`cell${num}`).innerHTML = objCopy[num];

    win = checkWin();

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
