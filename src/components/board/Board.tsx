import "./Board.scss";
import { BoardProps } from "../../types";
import { checkWinner } from "../../app/checkWinner";
import { useEffect } from "react";
import { randomMove, bestMove } from "../../app/MovesEngine";
import BoardCell from "./BoardCell";

function Board({
  difficulty,
  playerMovesFirst,
  playerCanMove,
  setPlayerCanMove,
  currentCombination,
  setCurrentCombination,
  gameOver,
  winCombination,
}: BoardProps) {
  useEffect(() => {
    if (!playerMovesFirst) setCurrentCombination(randomMove("---------"));
    else setCurrentCombination("---------");
  }, [playerMovesFirst, setCurrentCombination]);

  useEffect(() => {
    const gameStatus = checkWinner(currentCombination);
    if (gameStatus.winner !== null) {
      console.log("GAME OVER");
      gameOver(gameStatus);
    }
    // }, [currentCombination, gameOver]);
  }, [currentCombination]);

  function playerMove(cellIndex: number) {
    const newCombination = currentCombination
      .split("")
      .map((cellValue, i) => (cellIndex === i ? "x" : cellValue))
      .join("");

    setCurrentCombination(newCombination);
    setPlayerCanMove(false);

    const gameStatus = checkWinner(newCombination);
    if (!gameStatus.winner) {
      setTimeout(() => {
        setCurrentCombination(bestMove(newCombination, difficulty));
        setPlayerCanMove(true);
      }, 500);
    }
  }

  return (
    <div className={"Board" + (playerCanMove ? "" : " wait")}>
      {currentCombination.split("").map((cellValue, index) => {
        return (
          <BoardCell
            cellValue={cellValue}
            index={index}
            playerCanMove={playerCanMove}
            winCombination={winCombination}
            playerMove={playerMove}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Board;
