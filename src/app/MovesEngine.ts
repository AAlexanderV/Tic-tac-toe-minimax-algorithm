import { checkWinner } from "./checkWinner";

export function bestMove(combination: string): string {
  const combinationArray = combination.split("");

  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < 9; i++) {
    if (combinationArray[i] === "-") {
      combinationArray[i] = "o";
      let score = minimax(combinationArray, 0, false);
      combinationArray[i] = "-";

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  if (bestMove === null) {
    return randomMove(combination);
  }

  combinationArray[bestMove] = "o";

  return combinationArray.join("");
}

////
// randomMove
export function randomMove(combination: string): string {
  console.log("randomMove");

  const combinationArray = combination.split("");

  const availableCellsIndexes: Array<number> = [];
  combinationArray.forEach((value, index) => {
    if (value === "-") availableCellsIndexes.push(index);
  });

  const chosenCellIndex = Math.floor(Math.random() * availableCellsIndexes.length);

  combinationArray[availableCellsIndexes[chosenCellIndex]] = "o";

  return combinationArray.join("");
}

////
// NO EXPORT
const scores: { [key: string]: number } = {
  AI: 1,
  player: -1,
  draw: 0,
};
////
// NO EXPORT
function minimax(combinationArray: Array<string>, depth = 0, isMaximising: boolean): number {
  let result = checkWinner(combinationArray.join(""));
  console.log("checkWinner: ", result);

  if (result !== null) return scores[result];

  if (isMaximising) {
    let bestScore = -Infinity;

    for (let i = 0; i < 9; i++) {
      if (combinationArray[i] === "-") {
        combinationArray[i] = "o";
        let score = minimax(combinationArray, 0, false);
        combinationArray[i] = "-";

        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < 9; i++) {
      if (combinationArray[i] === "-") {
        combinationArray[i] = "x";
        let score = minimax(combinationArray, 0, true);
        combinationArray[i] = "-";

        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}
