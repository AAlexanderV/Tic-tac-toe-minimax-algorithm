import "./App.scss";
import { useState } from "react";

import GameField from "./components/gameField/GameField";

function App() {
  const [currentCombination, setCurrentCombination] = useState<string>("---------");
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setDraw] = useState<boolean>(false);

  const [playerScore, setplayerScore] = useState(0);
  const [AIScore, setAIScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  const [playerMovesFirst, setplayerMovesFirst] = useState(true);
  // const [playerMovesFirst, setplayerMovesFirst] = useState(false);

  return (
    <div className="App">
      <GameField
        playerMovesFirst={playerMovesFirst}
        currentCombination={currentCombination}
        setCurrentCombination={setCurrentCombination}
      />
    </div>
  );
}

export default App;
