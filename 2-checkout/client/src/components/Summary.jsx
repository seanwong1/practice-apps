import React, { Component } from "react";
import { render } from "react-dom";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.userInput)
    return (
      <div>
        Summary
      </div>
  )};
}

export default Summary;