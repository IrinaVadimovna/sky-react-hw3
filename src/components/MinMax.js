import React from "react";

const min = 0;
const max = 10;

class MinMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curCount: min };
  }

  inc = () => {
    if (this.state.curCount >= max) {
      this.setState((maximum) => ({ curCount: maximum.curCount - 1 }));
    }
    this.setState((prevState) => ({ curCount: prevState.curCount + 1 }));
  };

  minus = () => {
    if (this.state.curCount <= min) {
      this.setState((minimum) => ({ curCount: minimum.curCount + 1 }))
    }
    this.setState((nextState) => ({ curCount: nextState.curCount - 1 }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.minus}>
          {" "}
          -{" "}
        </button>
        <input type="number" value={this.state.curCount}/>
        <button type="button" onClick={this.inc}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default MinMax;

