import { BoardCellProps } from "../../types";

function BoardCell({
  cellValue,
  index,
  playerCanMove,
  winCombination,
  playerMove,
}: BoardCellProps) {
  const cursorStyle = playerCanMove
    ? cellValue === "-"
      ? { cursor: "pointer" }
      : { cursor: "not-allowed" }
    : { cursor: "wait" };

  const cellhighlight = winCombination?.includes(index) ? { backgroundColor: "red" } : {};

  function clickHandler() {
    if (cellValue === "-" && playerCanMove && !winCombination) {
      playerMove(index);
    }
  }

  return (
    <div
      className={"BoardCell number-" + (index + 1) + " value-" + cellValue}
      style={{ ...cursorStyle, ...cellhighlight }}
      onClick={clickHandler}
    ></div>
  );
}

export default BoardCell;
