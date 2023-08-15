import { BoardCellProps } from "../../types";

function BoardCell({ cellValue, index, playerCanMove, playerMove }: BoardCellProps) {
  const cursorStyle = playerCanMove
    ? cellValue === "-"
      ? { cursor: "pointer" }
      : { cursor: "not-allowed" }
    : { cursor: "wait" };

  function clickHandler() {
    if (cellValue === "-" && playerCanMove) {
      playerMove(index);
    }
  }

  return (
    <div
      className={"BoardCell number-" + (index + 1) + " value-" + cellValue}
      style={cursorStyle}
      onClick={clickHandler}
    ></div>
  );
}

export default BoardCell;
