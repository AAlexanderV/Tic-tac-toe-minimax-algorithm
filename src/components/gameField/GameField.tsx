import "./GameField.scss";
import { useState } from "react";
import { GameFieldProps, GameStatus } from "../../types";
import Board from "../board/Board";
import GameOverModal from "../gameOverModal/GameOverModal";

function GameField({ playerMovesFirst, setplayerMovesFirst, difficulty }: GameFieldProps) {
  const [currentCombination, setCurrentCombination] = useState<string>("---------");
  const [winner, setWinner] = useState<string | null>(null);

  const [playerScore, setplayerScore] = useState<number>(0);
  const [AIScore, setAIScore] = useState<number>(0);
  const [drawScore, setDrawScore] = useState<number>(0);
  const [playerCanMove, setPlayerCanMove] = useState<boolean>(true);
  const [winCombination, setWinCombination] = useState<Array<number> | null>(null);

  function setScore(winner: string | null) {
    switch (winner) {
      case "AI":
        setAIScore(AIScore + 1);
        break;
      case "player":
        setplayerScore(playerScore + 1);
        break;
      case "draw":
        setDrawScore(drawScore + 1);
        break;
      default:
        break;
    }
  }

  function gameOver(gameStatus: GameStatus) {
    setWinCombination(gameStatus.winCombination);
    setPlayerCanMove(false);
    setScore(gameStatus.winner);

    setTimeout(() => {
      setWinner(gameStatus.winner);
    }, 1500);
  }

  function restart() {
    setCurrentCombination("---------");
    setWinner(null);
    setWinCombination(null);
    setPlayerCanMove(true);
    setplayerMovesFirst(!playerMovesFirst);
  }

  return (
    <div className="GameField">
      <Board
        difficulty={difficulty}
        playerMovesFirst={playerMovesFirst}
        playerCanMove={playerCanMove}
        setPlayerCanMove={setPlayerCanMove}
        currentCombination={currentCombination}
        setCurrentCombination={setCurrentCombination}
        winCombination={winCombination}
        gameOver={gameOver}
      />

      {winner && (
        <GameOverModal
          playerScore={playerScore}
          AIScore={AIScore}
          drawScore={drawScore}
          winner={winner}
          restart={restart}
        />
      )}
    </div>
  );
}

export default GameField;
