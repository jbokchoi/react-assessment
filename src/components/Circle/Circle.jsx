import React from "react";
import styles from "./Circle.module.css";

const Circle = props => (
  <div
    className={styles.circle}
    style={{
      backgroundColor: props.color,
      border: props.color ? `3px solid purple` : "3px solid green"
    }}
    onClick={props.currentGuess ? props.handlePegClick : null}
  />
);

export default Circle;
