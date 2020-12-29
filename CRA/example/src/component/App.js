import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    time: 0,
    active: false,
  };
  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
      this.setState({
        time: 0,
      });
    } else {
      this.idInterval = setInterval(() => this.addSeceond(), 1000);
    }
    this.setState({
      active: !this.state.active,
    });
  };

  addSeceond = () => {
    this.setState({
      time: this.state.time + 1,
    });
  };
  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <SwitchButton click={this.handleClick} active={this.state.active} />
      </>
    );
  }
}

export default App;
