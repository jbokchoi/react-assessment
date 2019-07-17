import React, { Component } from "react";
import "./App.css";
import CircleContainer from "./components/CircleBoard/CircleBoard";
import Buttons from "./components/ButtonBoard/ButtonBoard";

const buttons = ["B1", "B2", "B3", "B4"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selBtnIdx: 0
    };
  }

  handleBtnSelection = btnIdx => {
    this.setState({ selBtnIdx: btnIdx });
  };

  render() {
    return (
      <div className="App">
        <header>Unit 4 Final Assessment</header>
        <div className="wrapper">
          <Buttons
            buttons={buttons}
            handleBtnSelection={this.handleBtnSelection}
          />
          <CircleContainer currentBtn={this.state.selBtnIdx} />
        </div>
      </div>
    );
  }
}

export default App;
