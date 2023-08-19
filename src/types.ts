export type ControlPanelProps = {
  playerMovesFirst: boolean;
  setplayerMovesFirst: (playerMove: boolean) => void;
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
};

export type GameFieldProps = {
  difficulty: string;
  playerMovesFirst: boolean;
  setplayerMovesFirst: (playerMove: boolean) => void;
};

export type BoardProps = {
  difficulty: string;
  playerMovesFirst: boolean;
  playerCanMove: boolean;
  setPlayerCanMove: (canMove: boolean) => void;
  setCurrentCombination: (combination: string) => void;
  currentCombination: string;
  winCombination: WinCombination;
  gameOver: (gameStatus: GameStatus) => void;
};

export type BoardCellProps = {
  cellValue: string;
  index: number;
  playerCanMove: boolean;
  winCombination: WinCombination;
  playerMove: (cellIndex: number) => void;
};

export type GameOverModalProps = {
  playerScore: number;
  AIScore: number;
  drawScore: number;
  winner: string | null;
  restart: () => void;
};

export type GameStatus = { winner: Winner; winCombination: WinCombination };

type Winner = string | null;
type WinCombination = Array<number> | null;
