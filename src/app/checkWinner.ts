const winCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(combination: string): {
  winner: null | string;
  winCombination: null | Array<number>;
} {
  const arrCombination = combination.split("");
  let winner = null;
  let winCombination = null;

  // check for draw
  let allCellsFull = true;
  arrCombination.forEach((cellValue) => {
    if (cellValue === "-") allCellsFull = false;
  });
  if (allCellsFull) winner = "draw";

  // check if player or AI won
  for (let i = 0; i < winCombs.length; i++) {
    if (
      (arrCombination[winCombs[i][0]] === "x" || arrCombination[winCombs[i][0]] === "o") &&
      arrCombination[winCombs[i][0]] === arrCombination[winCombs[i][1]] &&
      arrCombination[winCombs[i][1]] === arrCombination[winCombs[i][2]]
    ) {
      winner = arrCombination[winCombs[i][0]] === "o" ? "AI" : "player";
      winCombination = winCombs[i];
    }
  }

  return { winner, winCombination };
}
