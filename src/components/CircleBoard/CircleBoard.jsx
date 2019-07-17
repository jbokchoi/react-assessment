import React from "react";

const CircleBoard = props => {
  return (
    <div className="circle-container">
      <div
        className="circle"
        style={{
          backgroundColor: props.currentBtn === 0 ? "white" : "green",
          color: props.currentBtn === 0 ? "purple" : "white",
          border:
            props.currentBtn === 0 ? "3px solid purple" : "3px solid green"
        }}
      >
        1
      </div>
      <div
        className="circle"
        style={{
          backgroundColor: props.currentBtn === 1 ? "white" : "green",
          color: props.currentBtn === 1 ? "purple" : "white",
          border:
            props.currentBtn === 1 ? "3px solid purple" : "3px solid green"
        }}
      >
        2
      </div>
      <div
        className="circle"
        style={{
          backgroundColor: props.currentBtn === 2 ? "white" : "green",
          color: props.currentBtn === 2 ? "purple" : "white",
          border:
            props.currentBtn === 2 ? "3px solid purple" : "3px solid green"
        }}
      >
        3
      </div>
      <div
        className="circle"
        style={{
          backgroundColor: props.currentBtn === 3 ? "white" : "green",
          color: props.currentBtn === 3 ? "purple" : "white",
          border:
            props.currentBtn === 3 ? "3px solid purple" : "3px solid green"
        }}
      >
        4
      </div>
    </div>
  );
};

export default CircleBoard;
