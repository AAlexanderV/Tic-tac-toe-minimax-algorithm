import "./Board.scss";
import { BoardProps } from "../../types";
import { useState, useEffect } from "react";
import { randomMove, bestMove } from "../../app/MovesEngine";
import BoardCell from "./BoardCell";

function Board({ playerMovesFirst, currentCombination, setCurrentCombination }: BoardProps) {
  const [playerCanMove, setplayerCanMove] = useState(true);

  useEffect(() => {
    console.log("useEffect");

    if (!playerMovesFirst) setCurrentCombination(randomMove(currentCombination));
  }, [playerMovesFirst]);

  function playerMove(cellIndex: number) {
    const newCombination = currentCombination
      .split("")
      .map((cellValue, i) => (cellIndex === i ? "x" : cellValue))
      .join("");

    setCurrentCombination(newCombination);
    setplayerCanMove(false);

    setTimeout(() => {
      setCurrentCombination(bestMove(newCombination));
      setplayerCanMove(true);
    }, 500);
  }

  return (
    <div className={"Board" + (playerCanMove ? "" : " wait")}>
      {currentCombination.split("").map((cellValue, index) => {
        return (
          <BoardCell
            cellValue={cellValue}
            index={index}
            playerCanMove={playerCanMove}
            playerMove={playerMove}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Board;
