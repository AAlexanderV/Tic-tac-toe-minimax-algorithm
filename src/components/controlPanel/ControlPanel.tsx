import "./ControlPanel.scss";
import { ControlPanelProps } from "../../types";
import React from "react";

function ControlPanel({
  playerMovesFirst,
  setplayerMovesFirst,
  difficulty,
  setDifficulty,
}: ControlPanelProps) {
  const difficultyMap = ["low", "medium", "god"];

  function switchMovesOrder() {
    setplayerMovesFirst(!playerMovesFirst);
  }

  function changeDifficulty(event: React.SyntheticEvent<HTMLButtonElement>) {
    setDifficulty(event.currentTarget.dataset.difficulty || "medium");
  }

  return (
    <div className="ControlPanel">
      <div className="move_first">
        <h3>Player moves first: </h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={playerMovesFirst}
            onChange={switchMovesOrder}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="difficulty">
        <h3>Set difficulty level</h3>
        <div className="buttons_container">
          {difficultyMap.map((value) => {
            return (
              <button
                className={value + (difficulty === value ? " active" : "")}
                data-difficulty={value}
                onClick={changeDifficulty}
                key={value}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
