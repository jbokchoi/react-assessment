import React from "react";

const ButtonBoard = props => (
  <div className="button-board">
    {props.buttons.map((btn, idx) => (
      <button key={btn} onClick={() => props.handleBtnSelection(idx)}>
        Select circle {idx + 1}
      </button>
    ))}
  </div>
);

export default ButtonBoard;
