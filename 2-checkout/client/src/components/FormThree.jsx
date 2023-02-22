import React, { Component } from "react";
import { render } from "react-dom";
import FormTwo from './FormTwo.jsx';
import Summary from './Summary.jsx';

class FormThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  render() {
    console.log(this.props.userInput);
    return (
      <div>
        Hello, this is form 3
      </div>
  )};
}

export default FormThree;