import React, { Component } from "react";
import { render } from "react-dom";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var summary = Object.keys(this.props.userInput).map((yarr) =>
      <div>
        {yarr} {this.props.userInput[yarr]}
      </div>
    );

    return (
      <div>
        <h2>Summary</h2>
        <div>{summary}</div>
      </div>
  )};
}

export default Summary;