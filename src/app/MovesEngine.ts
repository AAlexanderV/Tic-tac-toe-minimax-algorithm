import { checkWinner } from "./checkWinner";

export function bestMove(combination: string, difficulty: string): string {
  const difficultyMap: { [key: string]: number } = {
    low: 5,
    medium: 6,
    god: 7,
  };

  const combinationArray = combination.split("");

  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < 9; i++) {
    if (combinationArray[i] === "-") {
      console.log("CELL: ", i);

      combinationArray[i] = "o";
      let score = minimax(combinationArray, difficultyMap[difficulty], false);
      combinationArray[i] = "-";

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }

      console.log("score: ", score);
    }
  }

  if (bestScore === Infinity || bestMove === null) return randomMove(combination);

  combinationArray[bestMove] = "o";

  return combinationArray.join("");
}

// randomMove
export function randomMove(combination: string): string {
  console.log("random move");

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
  AI: 100,
  player: -100,
  draw: 0,
};
////
// NO EXPORT
function minimax(combinationArray: Array<string>, depth: number, isMaximising: boolean): number {
  let result = checkWinner(combinationArray.join(""));

  if (result.winner !== null) {
    return scores[result.winner] * depth;
  }

  if (depth <= 1) return isMaximising ? -Infinity : Infinity;

  if (isMaximising) {
    let bestScore: number = -Infinity;

    for (let i = 0; i < 9; i++) {
      if (combinationArray[i] === "-") {
        combinationArray[i] = "o";
        let score = minimax(combinationArray, depth - 1, false);
        combinationArray[i] = "-";

        bestScore = Math.max(score, bestScore);
      }
    }

    return bestScore / depth;
  } else {
    let bestScore: number | null = Infinity;

    for (let i = 0; i < 9; i++) {
      if (combinationArray[i] === "-") {
        combinationArray[i] = "x";
        let score = minimax(combinationArray, depth - 1, true);
        combinationArray[i] = "-";
        bestScore = Math.min(score, bestScore);
      }
    }

    return bestScore * depth;
  }
}
