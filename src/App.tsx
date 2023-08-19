import "./App.scss";
import { useState } from "react";
import GameField from "./components/gameField/GameField";
import ControlPanel from "./components/controlPanel/ControlPanel";

function App() {
  const [playerMovesFirst, setplayerMovesFirst] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>("medium");

  return (
    <div className="App">
      <GameField
        playerMovesFirst={playerMovesFirst}
        setplayerMovesFirst={setplayerMovesFirst}
        difficulty={difficulty}
      />
      <ControlPanel
        playerMovesFirst={playerMovesFirst}
        setplayerMovesFirst={setplayerMovesFirst}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </div>
  );
}

export default App;
