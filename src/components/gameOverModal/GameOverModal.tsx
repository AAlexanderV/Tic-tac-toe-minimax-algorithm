import { GameOverModalProps } from "../../types";
import "./GameOverModal.scss";

function GameOverModal({ playerScore, AIScore, drawScore, winner, restart }: GameOverModalProps) {
  return (
    <div className="GameOverModal">
      <div className="inner_container">
        {(() => {
          switch (winner) {
            case "player":
              return <h1>You won! Congrats!</h1>;
            case "AI":
              return <h1>You lost! Don't be upset.</h1>;
            default:
              return <h1>It is a draw.</h1>;
          }
        })()}
        <ul>
          <li>
            You won <strong>{playerScore}</strong> time(s)
          </li>
          <li>
            You lost <strong>{AIScore}</strong> time(s)
          </li>
          <li>
            Draws: <strong>{drawScore}</strong>
          </li>
        </ul>

        <button onClick={restart}>RESTART</button>
      </div>
    </div>
  );
}

export default GameOverModal;
