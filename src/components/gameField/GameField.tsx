import "./GameField.scss";
// import { useState } from "react";
import { GameFieldProps } from "../../types";
import Board from "../board/Board";

function GameField({
  playerMovesFirst,
  currentCombination,
  setCurrentCombination,
}: GameFieldProps) {
  return (
    <div className="GameField">
      <Board
        playerMovesFirst={playerMovesFirst}
        currentCombination={currentCombination}
        setCurrentCombination={setCurrentCombination}
      />

      {/* <GameOverModal
          humanScore={humanScore}
          AIScore={AIScore}
          drawCounter={drawCounter}
          winner={winner}
          isDraw={isDraw}
          restart={() => {
            setCurrentTreeElement(root);
            setCurrentCombination("---------");
            setDraw(false);
            setWinner(null);
            setHumanCanMove(true);
          }}
        /> */}
    </div>
  );
}

export default GameField;
