export type GameFieldProps = {
  playerMovesFirst: boolean;
  currentCombination: string;
  setCurrentCombination: (combination: string) => void;
};

export type BoardProps = {
  playerMovesFirst: boolean;
  setCurrentCombination: (combination: string) => void;
  currentCombination: string;
};

export type BoardCellProps = {
  cellValue: string;
  index: number;
  playerCanMove: boolean;
  playerMove: (cellIndex: number) => void;
};
